import type { Request, Response } from "express";
import noteModel from "./noteModel.ts";
import envConfig from "../config/config.ts";

const createNote = async (req: Request, res: Response) => {
  try {
    const file = req.file
      ? `${envConfig.backendUrl}/${req.file.filename}`
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZSUkhxhCk0K91g3ibyExxsDmPpZ3vaSWHg&s";
    const { title, subtitle, description } = req.body;

    if (!title || !subtitle || !description) {
      res.status(400).json({
        message: "All Fields Are Required!!!",
      });
      return;
    }

    await noteModel.create({
      title,
      subtitle,
      description,
      file,
    });

    res.status(201).json({
      message: "Note Created Successfully!!!",
    });
  } catch (error) {
    console.log(error);
  }
};
