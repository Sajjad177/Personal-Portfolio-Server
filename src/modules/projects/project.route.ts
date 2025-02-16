import { Router } from "express";
import { projectController } from "./project.controller";
import auth from "../../middleware/auth";
import { USER_ROLES } from "../user/user.constant";
import { multerUpload } from "../../config/multer.config";

const route = Router();

route.post(
  "/create",
  multerUpload.single("image"),
  auth(USER_ROLES.admin),
  projectController.CreateProject
);
route.get(
  "/",
  projectController.getAllProjects
);
route.get(
  "/:id",
  projectController.getSingeleProject
);

route.put(
  "/update/:id",
  multerUpload.single("image"),
  auth(USER_ROLES.admin),
  projectController.updateProject
);
route.delete("/:id", projectController.deleteProject);

export const projectRoute = route;
