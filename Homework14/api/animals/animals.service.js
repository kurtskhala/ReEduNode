import { animalsModel } from "../../models/animals.js";
import mongoose from "mongoose";

export const getAllAnimals = async (req, res) => {
  try {
    let { page = 1, take = 10 } = req.query;
    page = parseInt(page, 10);
    take = Math.min(parseInt(take, 10), 10);

    const animals = await animalsModel
      .find()
      .skip((page - 1) * take)
      .limit(take);

    res.status(200).json({ message: "Success", data: animals });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animals" });
  }
};

export const createAnimal = async (req, res) => {
  try {
    const { name, type, age } = req.body;

    if (!name || !type || !age) {
      return res.status(400).json({ error: "Some fields are required" });
    }

    const newAnimal = await animalsModel.create({ name, type, age });
    res
      .status(201)
      .json({ message: "Animal created successfully", data: newAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to create animal" });
  }
};

export const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid MongoDB ID provided" });
    }

    const animal = await animalsModel.findById(id);

    if (!animal) {
      return res.status(404).json({ error: "Animal not found" });
    }

    res.status(200).json({ message: "Success", data: animal });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch animal" });
  }
};

export const updateAnimalById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid MongoDB ID provided" });
    }

    const updatedAnimal = await animalsModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedAnimal) {
      return res.status(404).json({ error: "Animal not found or not updated" });
    }

    res
      .status(200)
      .json({ message: "Animal updated successfully", data: updatedAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to update animal" });
  }
};

export const deleteAnimalById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ error: "Invalid MongoDB ID provided" });
    }

    const deletedAnimal = await animalsModel.findByIdAndDelete(id);

    if (!deletedAnimal) {
      return res.status(404).json({ error: "Animal not found or not deleted" });
    }

    res
      .status(200)
      .json({ message: "Animal deleted successfully", data: deletedAnimal });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete animal" });
  }
};
