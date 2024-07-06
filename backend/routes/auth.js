import express from "express";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { body, validationResult } from "express-validator";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register",
    [
        body("name", "Enter a valid name").isLength({ min: 3 }),
        body("email", "Enter a valid email").isEmail(),
        body("password", "Password must be atleast 4 characters").isLength({ min: 4 }),
    ],
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {

            const { name, email, password } = req.body;

            let salt = await bcrypt.genSalt(10);

            const secPass = await bcrypt.hash(password, salt);
            const userDoc = await User.create({ name, email, password: secPass });

            res.json(userDoc);

        } catch (e) {
            res.status(400).json({ e });
        }


    }
);

router.post("/login", [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists()
],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                res.status(400).json({ error: "Invalid Credentials" });
            }

            const passwordCompare = await bcrypt.compare(password, user.password);
            if (!passwordCompare) {
                return res.status(400).json({ error: "Invalid Credentials" });
            }

            const authtoken = jwt.sign({ Id: user._id }, process.env.JWT_SECRET);

            res.cookie("authToken", authtoken).json({
                Id: user._id,
                name: user.name,
            });
        } catch (e) {
            res.status(400).json({ e });
        }
    }
)

router.get("/profile", verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.Id).select("-password");
        if (!user) {
            return res.status(400).json({ error: "No user found" });
        }
        res.json(user);
    } catch (e) {
        res.status(400).json({ e });
    }
})

router.post("/logout", (req, res) => {
    res.cookie('authToken', '', { expires: new Date(0) }).json("ok");
});

export default router;