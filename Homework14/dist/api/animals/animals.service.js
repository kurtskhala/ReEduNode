var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { animalsModel } from "../../models/animals.js";
import mongoose from "mongoose";
export const getAllAnimals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { page = "1", take = "10" } = req.query;
        const pageNumber = parseInt(page, 10);
        const takeNumber = Math.min(parseInt(take, 10), 10);
        const animals = yield animalsModel
            .find()
            .skip((pageNumber - 1) * takeNumber)
            .limit(takeNumber);
        res.status(200).json({ message: "Success", data: animals });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch animals" });
    }
});
export const createAnimal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, type, age } = req.body;
        if (!name || !type || !age) {
            res.status(400).json({ error: "Some fields are required" });
            return;
        }
        const newAnimal = yield animalsModel.create({ name, type, age });
        res
            .status(201)
            .json({ message: "Animal created successfully", data: newAnimal });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to create animal" });
    }
});
export const getAnimalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            res.status(400).json({ error: "Invalid MongoDB ID provided" });
            return;
        }
        const animal = yield animalsModel.findById(id);
        if (!animal) {
            res.status(404).json({ error: "Animal not found" });
            return;
        }
        res.status(200).json({ message: "Success", data: animal });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch animal" });
    }
});
export const updateAnimalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            res.status(400).json({ error: "Invalid MongoDB ID provided" });
            return;
        }
        const updatedAnimal = yield animalsModel.findByIdAndUpdate(id, req.body, {
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
    }
    catch (error) {
        res.status(500).json({ error: "Failed to update animal" });
    }
});
export const deleteAnimalById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        if (!mongoose.isValidObjectId(id)) {
            res.status(400).json({ error: "Invalid MongoDB ID provided" });
            return;
        }
        const deletedAnimal = yield animalsModel.findByIdAndDelete(id);
        if (!deletedAnimal) {
            res.status(404).json({ error: "Animal not found or not deleted" });
            return;
        }
        res
            .status(200)
            .json({ message: "Animal deleted successfully", data: deletedAnimal });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to delete animal" });
    }
});
