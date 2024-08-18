import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js"


import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.routes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse req.body
app.use(express.urlencoded({ extended: true})) //parse form data(urlencoded)
app.use(cookieParser());


app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
})