import { expenseModel } from "../../models/expense.js";
import mongoose from "mongoose";

export const getAllExpenses = async (req, res) => {
  let { page = 1, take = 10 } = req.query;
  page = parseInt(page, 10);
  take = parseInt(take, 10);

  take = Math.min(take, 10);

  const expenses = await expenseModel
    .find()
    .skip((page - 1) * take)
    .limit(take);

  res.render("pages/expenses.ejs", { expenses });

  // try {
  //   let { page = 1, take = 10 } = req.query;
  //   take > 10 ? (take = 10) : take;
  //   const expenses = await readFile();
  //   res.render("pages/expenses.ejs", { expenses });
  //   // res.json(expenses.slice((page - 1) * take, take * page));
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to read expenses" });
  // }
};

export const createExpense = async (req, res) => {
  const { category, price } = req.body;

  const user = await expenseModel.create({ category, price });

  res.status(200).json({ message: "success", data: user });
  // try {
  //   const { category, price } = req.body;
  //   const expenses = await readFile();
  //   const date = new Date();
  //   const lastId = expenses[expenses.length - 1]?.id || 0;

  //   const newExpense = {
  //     id: lastId + 1,
  //     category,
  //     price,
  //     date,
  //   };

  //   expenses.push(newExpense);

  //   await writeFile(JSON.stringify(expenses));
  //   res.status(201).json(newExpense);
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to create expense" });
  // }
};

export const addExpense = async (req, res) => {
  try {
    res.render("pages/addExpense.ejs");
  } catch (error) {
    res.status(500).json({ error: "Failed to create expense" });
  }
};

export const editExpense = async (req, res) => {
  try {
    res.render("pages/editExpense.ejs");
  } catch (error) {
    res.status(500).json({ error: "Failed to create expense" });
  }
};

export const expenseDetiles = async (req, res) => {
  const { id } = req.params;
  if (!id || !mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid expense ID provided" });
  }
  const expense = await expenseModel.findById(id);

  if (!expense) {
    return res.status(404).json({ error: "Expense not found" });
  }

  res.render("pages/expenseDetiles.ejs", { expense });
  // try {
  //   const expenses = await readFile();
  //   const { id } = req.params;
  //   const index = expenses.findIndex((expense) => expense.id === Number(id));

  //   if (index === -1) {
  //     res.status(400).json({ error: "Expense not found" });
  //   }

  //   const expense = expenses[index];

  //   res.render("pages/expenseDetiles.ejs", { expense });
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to create expense" });
  // }
};

export const getExpenseById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "wrong mongodb id is provided" });
    return;
  }

  const expense = await expenseModel.findById(id);
  if (!expense) {
    res.status(404).res.json({ message: "not found" });
  }

  res.json(expense);

  // try {
  //   const expenses = await readFile();
  //   const { id } = req.params;
  //   const index = expenses.findIndex((expense) => expense.id === Number(id));

  //   if (index === -1) {
  //     res.status(400).json({ error: "Expense not found" });
  //   }

  //   res.json(expenses[index]);
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to find expense" });
  // }
};

export const updateExpenseById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid MongoDB ID provided" });
  }

  const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedExpense) {
    return res
      .status(404)
      .json({ message: "Expense not found or not updated" });
  }

  res
    .status(200)
    .json({ message: "Expense updated successfully", data: updatedExpense });

  // try {
  //   const expenses = await readFile();
  //   const { id } = req.params;
  //   const { category, price } = req.body;

  //   const index = expenses.findIndex((expense) => expense.id === Number(id));

  //   if (index === -1) {
  //     res.status(400).json({ error: "Expense not found" });
  //   }

  //   expenses[index] = {
  //     ...expenses[index],
  //     price: price || expenses[index].price,
  //     category: category || expenses[index].category,
  //   };
  //   await writeFile(JSON.stringify(expenses));

  //   res
  //     .status(201)
  //     .json({ message: "Expense updated successfully", data: expenses[index] });
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to find expense" });
  // }
};

export const deleteExpenseById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    res.status(400).json({ message: "wrong mongodb id is provided" });
    return;
  }

  const deletedProduct = await expenseModel.findByIdAndDelete(id);

  if (!deletedProduct) {
    res.status(404).json({ message: "product didnot deleted" });
    return;
  }

  res.json(deletedProduct);
  // try {
  //   const expenses = await readFile();
  //   const { id } = req.params;

  //   const index = expenses.findIndex((expense) => expense.id === Number(id));

  //   if (index === -1) {
  //     return res.status(400).json({ error: "Expense not found" });
  //   }

  //   const deletedExpense = expenses.splice(index, 1);

  //   await writeFile(JSON.stringify(expenses));
  //   res.status(201).json(deletedExpense);
  // } catch (error) {
  //   res.status(500).json({ error: "Failed to find expense" });
  // }
};
