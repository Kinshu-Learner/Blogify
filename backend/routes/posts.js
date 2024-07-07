import express from "express";
import verifyToken from "../middleware/authMiddleware.js";
import Post from "../models/Post.js";
import { body, validationResult } from 'express-validator';

const router = express.Router();

// TODO: add express validator

router.post("/",
    verifyToken,
    [
        body('title', "Enter a valid title").exists(),
        body('summary', "Summary should not be more than 400 characters").isLength({ max: 400 }),
        body('content', "Content should not be empty").exists()
    ],
    async (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

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

router.put("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;
    const { title, summary, content } = req.body;

    const postDoc = await Post.findById(id);

    const isAuthor = postDoc.author.toString() === req.Id.toString();

    if (!isAuthor) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    postDoc.title = title;
    postDoc.summary = summary;
    postDoc.content = content;

    await postDoc.save();

    res.json(postDoc);
});

router.delete("/:id", verifyToken, async (req, res) => {
    const { id } = req.params;

    try {
        const postDoc = await Post.findById(id);
        if (!postDoc) {
            return res.status(404).json({ message: "Post not found" });
        }

        const isAuthor = postDoc.author.toString() === req.Id.toString();
        if (!isAuthor) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        await Post.findByIdAndDelete(id);

        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }

});

export default router;