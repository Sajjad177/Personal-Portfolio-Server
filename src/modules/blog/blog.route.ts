import { Router } from "express";
import { blogController } from "./blog.controller";
import { multerUpload } from "../../config/multer.config";

const route = Router();

route.post("/create", multerUpload.single("image"), blogController.createBlog);

route.get("/", blogController.getAllBlogs);
route.get("/:id", blogController.getSingleBlog);

route.put(
  "/update/:id",
  multerUpload.single("image"),
  blogController.updateBlog
);

route.delete("/:id", blogController.deleteBlog);

export const blogRoute = route;
