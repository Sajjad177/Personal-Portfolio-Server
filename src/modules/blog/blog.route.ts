import { Router } from "express";
import { blogController } from "./blog.controller";

const route = Router();

route.post("/create", blogController.createBlog);

route.get("/", blogController.getAllBlogs);

route.put("/update/:id", blogController.updateBlog);

route.delete("/:id", blogController.deleteBlog);

export const blogRoute = route;
