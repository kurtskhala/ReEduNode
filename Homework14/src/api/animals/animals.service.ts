import { Request, Response } from "express";
import { animalsModel } from "../../models/animals.js";
import mongoose from "mongoose";

interface Animal {
  name: string;
  type: string;
  age: number;
}

export const getAllAnimals = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let { page = "1", take = "10" } = req.query;

    const pageNumber = parseInt(page as string, 10);
    const takeNumber = Math.min(parseInt(take as string, 10), 10);

    const animals = await animalsModel
      .find()
      .skip((pageNumber - 1) * takeNumber)
      .limit(takeNumber);

    res.status(200).json({ message: "Success", data: animals });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animals" });
  }
};

export const createAnimal = async (
  req: Request<{}, {}, Animal>,
  res: Response
): Promise<void> => {
  try {
    const { name, type, age } = req.body;

    if (!name || !type || !age) {
      res.status(400).json({ error: "Some fields are required" });
      return;
    }

    const newAnimal = await animalsModel.create({ name, type, age });
    res
      .status(201)
      .json({ message: "Animal created successfully", data: newAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to create animal" });
  }
};

export const getAnimalById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ error: "Invalid MongoDB ID provided" });
      return;
    }

    const animal = await animalsModel.findById(id);

    if (!animal) {
      res.status(404).json({ error: "Animal not found" });
      return;
    }

    res.status(200).json({ message: "Success", data: animal });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animal" });
  }
};

export const updateAnimalById = async (
  req: Request<{ id: string }, {}, Partial<Animal>>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ error: "Invalid MongoDB ID provided" });
      return;
    }

    const updatedAnimal = await animalsModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedAnimal) {
      res.status(404).json({ error: "Animal not found or not updated" });
      return;
    }

    res
      .status(200)
      .json({ message: "Animal updated successfully", data: updatedAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to update animal" });
  }
};

export const deleteAnimalById = async (
  req: Request<{ id: string }>,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      res.status(400).json({ error: "Invalid MongoDB ID provided" });
      return;
    }

    const deletedAnimal = await animalsModel.findByIdAndDelete(id);

    if (!deletedAnimal) {
      res.status(404).json({ error: "Animal not found or not deleted" });
      return;
    }

    res
      .status(200)
      .json({ message: "Animal deleted successfully", data: deletedAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete animal" });
  }
};
