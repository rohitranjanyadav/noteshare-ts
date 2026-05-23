import express from "express";
import globalErrorHandler from "./middlewares/globalErrorHandler.ts";
import noteRoute from "./note/noteRoute.ts";

const app = express();

app.use("/api/notes",noteRoute)

app.use(globalErrorHandler);

export default app;
