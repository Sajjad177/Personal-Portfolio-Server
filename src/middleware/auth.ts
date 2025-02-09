import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import { TUserRole } from "../modules/user/user.interface";

const auth = (...requiredRoles: TUserRole[]) => {
  console.log("from auth -> ", requiredRoles);
  return catchAsync(
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({
          success: false,
          message: "You are not authenticated",
        });
      }

      const decoded = jwt.verify(token, config.jwtAccessTokenSecret as string);
      console.log("this is decoded ->", decoded);
      const { error, role } = decoded as JwtPayload;

      if (error) {
        return res.status(401).json({
          success: false,
          message: "Invalid credentials",
        });
      }

      if (requiredRoles && !requiredRoles.includes(role)) {
        return res.status(401).json({
          success: false,
          message: "You are not admin",
        });
      }

      req.user = decoded as JwtPayload;
      next();
    }
  );
};

export default auth;
