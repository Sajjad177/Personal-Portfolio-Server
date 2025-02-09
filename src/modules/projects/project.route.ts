import { Router } from "express";
import { projectController } from "./project.controller";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../user/user.constant";

const route = Router();

route.post("/create", auth(USER_ROLES.admin), projectController.CreateProject);
route.get("/", projectController.getAllProjects);
route.put("/update/:id", projectController.updateProject);
route.delete("/:id", projectController.deleteProject);

export const projectRoute = route;
