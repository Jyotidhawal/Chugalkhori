import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectionToMongo from "./db/connection.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
  path: `${__dirname}/.env`
});

const app = express();

app.use(cookieParser());
app.use(express.json());
// app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors({
  origin: "http://localhost:3000", // Adjust according to your frontend URL
  credentials: true,
}));

const port = 4000;

app.get("/api/auth/signup", (req, res) => {
  res.send("Hello World signup");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get('/',(req,res)=>{
//     // root route http://localhost:3000
//     res.send("hello worldmmmmm");
// });

// app.get("/api/auth/signup" , (req, res)=>{
//     console.log("signup route");
// });

// app.get("/api/auth/login" , (req, res)=>{
//     console.log("login route");
// });

// app.get("/api/auth/logout" , (req, res)=>{
//     console.log("logout route");
// });

app.listen(port, () => {
  connectionToMongo();
  console.log(`server listening on port ${port}`);
});
