import express from "express";
import auth from "./routes/auth.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/api/auth", auth);

app.listen(7000, () => {
    console.log("Server is running on port 7000");
})