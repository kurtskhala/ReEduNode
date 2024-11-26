import { Router } from "express";
import {
  createAnimal,
  deleteAnimalById,
  getAllAnimals,
  getAnimalById,
  updateAnimalById,
} from "./animals.service.js";

const animalsRouter = Router();

animalsRouter.get("/", getAllAnimals);

animalsRouter.post("/", createAnimal);

animalsRouter.get("/:id", getAnimalById);

animalsRouter.put("/:id", updateAnimalById);

animalsRouter.delete("/:id", deleteAnimalById);

export default animalsRouter;
