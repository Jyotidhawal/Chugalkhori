import cors from 'cors'
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

import connectionToMongo from "./db/connection.js";


const app = express();
dotenv.config();
 app.use(cors());

app.use(express.json());
app.use(cookieParser());

const port=4000;

app.get("/", (req, res) => {
    res.send("Hello World");
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

app.listen(port,()=> {
    connectionToMongo();
    console.log(`server listening on port ${port}`)
}
);