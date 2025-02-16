import mongoose from "mongoose";

export type TMessage = {
  sender: mongoose.Types.ObjectId;
  email: string;
  name: string;
  message: string;
  createdAt: Date;
};
