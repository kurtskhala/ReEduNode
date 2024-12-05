import { Router } from "express";
import {
  addExpense,
  createExpense,
  deleteExpenseById,
  editExpense,
  expenseDetiles,
  getAllExpenses,
  getExpenseById,
  updateExpenseById,
} from "./expenses.service.js";
import { isValidApiKey } from "../../midlewares/isValidApiKey.midleware.js";
import { areRequiredFieldsPresent } from "../../midlewares/areRequiredFieldsPresent.midleware.js";
const expensesRouter = Router();

expensesRouter.get("/", getAllExpenses);

expensesRouter.get("/expense/:id", expenseDetiles);

expensesRouter.get("/add", addExpense);

expensesRouter.get("/edit/:id", editExpense);

expensesRouter.post("/", areRequiredFieldsPresent, createExpense);

expensesRouter.get("/:id", getExpenseById);

expensesRouter.put("/:id", updateExpenseById);

expensesRouter.delete("/:id", isValidApiKey, deleteExpenseById);

export default expensesRouter;