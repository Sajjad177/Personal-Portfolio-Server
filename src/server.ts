import mongoose from "mongoose";
import config from "./config";
import app from "./app";
import { Server } from "http";

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.mongoURI as string);
    server = app.listen(config.port, () => {
      console.log(`Server running on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();

// process.on("unhandledRejection", () => {
//   console.log("unhandledRejection is detected, server is shutting down");
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   }
//   process.exit(1);
// });

// process.on("uncaughtException", () => {
//   console.log("uncaughtException is detected, server is shutting down");
//   process.exit(1);
// });
