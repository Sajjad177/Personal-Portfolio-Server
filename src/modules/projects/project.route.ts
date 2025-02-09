import { Router } from "express";
import { projectController } from "./project.controller";


const route = Router();

route.post("/create", projectController.CreateProject);
route.get("/", projectController.getAllProjects);
route.put("/update/:id", projectController.updateProject);
route.delete("/:id", projectController.deleteProject);

export const projectRoute = route;
