import express from "express";
import auth from "./routes/auth.js";
import posts from "./routes/posts.js";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials: true
    }
));
app.use(express.json());
app.use(cookieParser());

await mongoose.connect(process.env.MONGODB_CONNECTION_URL);

app.use("/api/auth", auth);

app.use("/api/posts", posts);

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})