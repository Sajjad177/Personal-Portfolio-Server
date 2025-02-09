import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { messageService } from "./message.service";

const createMessage = catchAsync(async (req, res) => {
  const result = await messageService.createMessageInDB(req.body);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Message sent successfully",
    data: result,
  });
});

const getAllMessages = catchAsync(async (req, res) => {
  const result = await messageService.getAllMessagesFromDB();

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Messages retrieved successfully",
    data: result,
  });
});

const deleteMessage = catchAsync(async (req, res) => {
  const { id } = req.params;
  await messageService.deleteMessageInDB(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Message deleted successfully",
    data: null,
  });
});

export const messageController = {
  createMessage,
  getAllMessages,
  deleteMessage,
};
