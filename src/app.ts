import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
// import router from "./routes";

const app: Application = express();

// parser -->
app.use(express.json());
app.use(cookieParser());

//corse setup :
const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  credentials: true,
};

app.use(cors(corsOptions));

//routes
// app.use("/api", router);
app.get("/", (req: Request, res: Response) => {
  res.send("This api is working");
});

// global error handler :
// app.use(globalErrorHandler as unknown as RequestHandler);
// app.use(notFound as unknown as RequestHandler);

export default app;
