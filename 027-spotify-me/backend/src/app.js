import express from "express";
import router from "./routes.js";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


const app = express();

dotenv.config();

app.use(cors());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(router);

app.listen(process.env.PORT);