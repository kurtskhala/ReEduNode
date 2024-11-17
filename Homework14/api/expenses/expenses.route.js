import { Router } from "express";
import {
  createExpense,
  deleteExpenseById,
  getAllExpenses,
  getExpenseById,
  updateExpenseById,
} from "./expenses.service.js";
import { isValidApiKey } from "../../midlewares/isValidApiKey.midleware.js";
import { areRequiredFieldsPresent } from "../../midlewares/areRequiredFieldsPresent.midleware.js";
const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);

expensesRouter.post("/", areRequiredFieldsPresent, createExpense);

expensesRouter.get("/:id", getExpenseById);

expensesRouter.put("/:id", updateExpenseById);

expensesRouter.delete("/:id", isValidApiKey, deleteExpenseById);

export default expensesRouter;
