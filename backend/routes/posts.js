import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import Post from "../models/Post.js";

const router = express.Router();

router.post("/", verifyToken, async (req, res) => {
    const { title, summary, content } = req.body;

    const postDoc = await Post.create({
        title,
        summary,
        content
    })

    res.json(postDoc);
})

export default router;