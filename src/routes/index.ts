import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { blogRoute } from "../modules/blog/blog.route";
import { messageRoute } from "../modules/messages/message.route";
import { projectRoute } from "../modules/projects/project.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/blog",
    route: blogRoute,
  },
  {
    path: "/message",
    route: messageRoute,
  }, 
  {
    path: "/project",
    route: projectRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
