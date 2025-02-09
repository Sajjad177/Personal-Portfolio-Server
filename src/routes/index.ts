import { Router } from "express";
import { userRoute } from "../modules/user/user.route";
import { blogRoute } from "../modules/blog/blog.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
