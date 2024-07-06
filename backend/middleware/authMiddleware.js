import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.cookies["authToken"];

    if (!token) {
        return res.status(401).json({ error: "Not Authorized" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.Id = verified.Id;
        next();

    } catch (error) {
        res.status(401).json({ error: "Token is not valid" });
    }
}

export default verifyToken;