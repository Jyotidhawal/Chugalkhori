import  express  from "express";
import { sendMessage,getMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const Routers=express.Router();
Routers.get("/:id" ,protectRoute ,getMessage);
Routers.post("/send/:id" ,protectRoute, sendMessage);

export default Routers;