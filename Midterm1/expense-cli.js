#! /usr/bin/env node

// თქვენი დავალებაა ააწყოთ expense-cli  ქომანდერის დახამრებით.
// 1) უნდა გქონდეს CRUD - create, read, update, delete, getById ფუნცქიონალი.
// იქსფენსების აპლიკაციაში უნდა გქონდეთ მინიმუმ 4 ფილდი.
// მაგალითად category, price, id, date დანარჩენი თქვენი ფანტაზიით დაამატეთ.
// 2) დამატების დროს აიდისთან ერთად დაამატეთ დრო, როდის მოხდა ამ იქსფენსის დამატება.
// და შესაბამისად show(ყველა იქსფენსის) ნახვის დროს გააყოლეთ --asc --desc
// რომელიც დაალაგებს შექმნის თარიღს ზრდადობა კლებადობით იქსფენსებს.
// 3) აფდეითის დროს ისევე როგორც ლექციაზე ვქენით დააფდეითედ ყველა ფილდი.
// 4) დაამატეთ ქომანდი, expense-cli price --asc ან --desc აქაც დაალაგებს ზრდადობა კლებადობით
// იქსფენსების ფასებს და ისე დაგიბრუნებთ.
// 5) შექმნის დროს დაადეთ ვალიდაცია მინიმალური ხარჯი უნდა იყოს 10 ლარი.
//  მაგაზე ნაკლებს თუ შეიყვანს იუზერი რამე ერორი დაურტყით ვალიდაციის.

import { Command } from "commander";
import { readFile, writeFile } from "./utils.js";
const program = new Command();

program
  .command("create")
  .description("create expense")
  .argument("<category>", "category of expense")
  .argument("<price>", "price of expense")
  .action(async (category, price) => {
    const expenses = await readFile("expenses.json", false);
    if(price<10) {
        console.log("not enough money");
        return;
    }
    const lastId = expenses[expenses.length - 1]?.id || 0;
    const date = new Date();
    const newExpense = {
      id: lastId + 1,
      category,
      price,
      date,
    };
    expenses.push(newExpense);
    await writeFile("expenses.json", JSON.stringify(expenses));
  });

program
  .command("read")
  .description("reads all expenses")
  .option("--asc", "sort expenses in ascending order")
  .option("--desc", "sort expenses in descending order")
  .action(async (options) => {
    const expenses = await readFile("expenses.json", false);
    expenses.forEach((expense) => {
      expense.date = new Date(expense.date);
    });

    if (options.asc) {
      expenses.sort((a, b) => a.date.getTime() - b.date.getTime());
    } else if (options.desc) {
      expenses.sort((a, b) => b.date.getTime() - a.date.getTime());
    }
    console.log(expenses);
  });

program
  .command("update")
  .description("create expense")
  .argument("<id>", "id of expense")
  .argument("<category>", "category of expense")
  .argument("<price>", "price of expense")
  .action(async (id, category, price) => {
    const expenses = await readFile("expenses.json", false);
    const index = expenses.findIndex((expense) => expense.id === Number(id));
    if (index === -1) {
      console.log("id is incorrect");
      return;
    }
    const newExpense = {
      ...expenses[index],
      category,
      price,
    };
    expenses[index] = newExpense;
    await writeFile("expenses.json", JSON.stringify(expenses));
  });

program
  .command("delete")
  .description("create expense")
  .argument("<id>", "id of expense")
  .action(async (id) => {
    const expenses = await readFile("expenses.json", false);
    const index = expenses.findIndex((expense) => expense.id === Number(id));
    if (index === -1) {
      console.log("id is incorrect");
      return;
    }
    const deletedExpense = expenses.splice(index, 1);
    await writeFile("expenses.json", JSON.stringify(expenses));
    console.log(deletedExpense);
  });

program
  .command("getById")
  .description("create expense")
  .argument("<id>", "id of expense")
  .action(async (id) => {
    const expenses = await readFile("expenses.json", false);
    const index = expenses.findIndex((expense) => expense.id === Number(id));
    if (index === -1) {
      console.log("id is incorrect");
      return;
    }
    console.log(expenses[index]);
  });

program
  .command("price")
  .description("reads all expenses based on price")
  .option("--asc", "sort expenses in ascending order")
  .option("--desc", "sort expenses in descending order")
  .action(async (options) => {
    const expenses = await readFile("expenses.json", false);

    if (options.asc) {
      expenses.sort((a, b) => a.price - b.price);
    } else if (options.desc) {
      expenses.sort((a, b) => b.price - a.price);
    }
    console.log(expenses);
  });

program.parse();
