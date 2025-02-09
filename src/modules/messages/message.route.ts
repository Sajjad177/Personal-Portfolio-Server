import { Router } from "express";
import { messageController } from "./message.controller";


const route = Router();

route.post("/create", messageController.createMessage);
route.get("/", messageController.getAllMessages);
route.delete("/:id", messageController.deleteMessage);

export const messageRoute = route;