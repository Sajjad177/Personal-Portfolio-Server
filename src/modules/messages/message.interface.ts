import mongoose from "mongoose";

export type TMessage = {
  sender: mongoose.Types.ObjectId;
  name: string;
  message: string;
  createdAt: Date;
};
