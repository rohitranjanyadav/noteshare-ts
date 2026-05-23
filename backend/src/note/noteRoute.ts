import express from "express";
import { createNote } from "./noteController.ts";

const noteRoute = express.Router();

import { multer, storage } from "../../src/middlewares/multerMiddleware.ts";
const upload = multer({ storage: storage });

noteRoute.route("/").post(upload.single("file"), createNote);

export default noteRoute;
