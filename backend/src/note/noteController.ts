import type { NextFunction, Request, Response } from "express";
import noteModel from "./noteModel.ts";
import envConfig from "../config/config.ts";
import createHttpError from "http-errors";

const createNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const file = req.file
      ? `${envConfig.backendUrl}/${req.file.filename}`
      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZSUkhxhCk0K91g3ibyExxsDmPpZ3vaSWHg&s";
    const { title, subtitle, description } = (req.body ?? {}) as {
      title?: string;
      subtitle?: string;
      description?: string;
    };

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
    return next(createHttpError(500, "Error While Creating Note!!!"));
  }
};

const listNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json({
      message: "Notes Fetched!!!",
      data: notes,
    });
  } catch (error) {
    return next(createHttpError(500, "Error While Fetching!!!"));
  }
};

const listNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const note = await noteModel.findById(id);

    if (!note) {
      return next(createHttpError(404, "Note Not Found!!!"));
    }
    res.status(200).json({
      message: "Note Fetched!!!",
      data: note,
    });
  } catch (error) {
    return next(createHttpError(500, "Error While Fetching!!!"));
  }
};

const deleteNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    await noteModel.findByIdAndDelete(id);
  } catch (error) {
    return next(createHttpError(500, "Error While Deleting!!!"));
  }
};

export { createNote, listNotes, listNote, deleteNote };
