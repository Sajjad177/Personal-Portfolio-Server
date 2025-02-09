import config from "../../config";
import bcrypt from "bcrypt";
import User from "./user.model";
import { createToken } from "./user.utils";
import { Response } from "express";
import sendResponse from "../../utils/sendResponse";

const loginUserInDB = async (payload: { email: string; password: string }, res: Response) => {
  let user = await User.findOne({ email: payload.email });

  // If user doesn't exist, create a new one
  if (!user) {
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcryptSaltRounds)
    );
    user = await User.create({
      email: payload.email,
      password: hashedPassword,
    });
  } else {
    // If user exists, validate the password
    const isPasswordValid = await bcrypt.compare(
      payload.password,
      user.password
    );
    if (!isPasswordValid) {
      sendResponse(res, {
        statusCode: 401,
        success: false,
        message: "Password is incorrect",
        data: null,
      })
    }
  }

  const JwtPayload = {
    email: user.email,
    role: user.role,
    userId: user._id.toString(),
  };

  // create access token
  const token = createToken(
    JwtPayload,
    config.jwtAccessTokenExpiresIn as string,
    config.jwtAccessTokenSecret as string
  );

  return { token, user };
};

export const userService = {
  loginUserInDB,
};
