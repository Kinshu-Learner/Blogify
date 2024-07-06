import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import Post from "../models/Post.js";

const router = express.Router();

// TODO: add express validator

router.post("/", verifyToken, async (req, res) => {
    const { title, summary, content } = req.body;

    const postDoc = await Post.create({
        title,
        summary,
        content,
        author: req.Id
    })

    res.json(postDoc);
})

router.get("/", async (req, res) => {
    const posts = await Post.find()
        .populate('author', ['name'])
        .sort({ createdAt: -1 })
        .limit(20);
    res.json(posts);
});

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    const postDoc = await Post.findById(id)
        .populate('author', ['name']);

    res.json(postDoc);
});

export default router;