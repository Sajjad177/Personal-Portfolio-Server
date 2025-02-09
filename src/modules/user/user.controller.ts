import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const loginUser = catchAsync(async (req, res) => {
  console.log(req.body);
  const result = await userService.loginUserInDB(req.body, res);
  console.log(result);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User logged in successfully",
    data: result,
  });
});

export const userController = {
  loginUser,
};
