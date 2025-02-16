import cors from "cors";
import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import router from "./routes";


const app: Application = express();

// parser -->
app.use(express.json());
app.use(cookieParser());

//corse setup :
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true,
};

app.use(cors(corsOptions));

//routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("This api is working");
});


export default app;
