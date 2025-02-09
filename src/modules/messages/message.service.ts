import { TMessage } from "./message.interface";
import Message from "./message.model";

const createMessageInDB = async (payload: TMessage) => {
  const result = await Message.create(payload);
  return result;
};


const getAllMessagesFromDB = async () => {
  const result = await Message.find({});
  return result;
};

const deleteMessageInDB = async (id: string) => {
  const result = await Message.findOneAndDelete({ _id: id });
  return result;
};

export const messageService = {
  createMessageInDB,
  getAllMessagesFromDB,
  deleteMessageInDB,
};