import dotenv from "dotenv";

dotenv.config();

export default {
  port: process.env.PORT,
  mongoURI: process.env.MONGODB_URL,
};
