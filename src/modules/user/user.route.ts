import { Router } from "express";
import { userController } from "./user.controller";

const route = Router();

route.post("/login", userController.loginUser);

export const userRoute = route;
