#! /usr/bin/env node

// 2) Create a Car factory CLI tool that.
//      /Takes a car name, car price and car color
//      /add new car in cars.json
//      /delete car
//      /show all cars
//      /update car
//      /get car by id

import { Command } from "commander";
import { readFile, writeFile } from "./utils.js";
const program = new Command();

program
  .command("add")
  .description("adds car into the file")
  .argument("<name>", "name of the car")
  .argument("<price>", "price of the car")
  .argument("<color>", "color of the car")
  .action(async (name, price, color) => {
    const cars = await readFile("cars.json", false);
    const lastId = cars[cars.length - 1]?.id || 0;
    const newCar = {
      id: lastId + 1,
      name,
      price,
      color,
    };
    cars.push(newCar);
    await writeFile("cars.json", JSON.stringify(cars));
  });

program
  .command("update")
  .description("adds car into the file")
  .argument("<id>", "id of the car")
  .argument("<name>", "name of the car")
  .argument("<price>", "price of the car")
  .argument("<color>", "color of the car")
  .action(async (id, name, price, color) => {
    const cars = await readFile("cars.json", false);
    const index = cars.findIndex((car) => car.id === Number(id));
    const updatedCar = {
      id: Number(id),
      name,
      price,
      color,
    };
    cars[index] = updatedCar;
    await writeFile("cars.json", JSON.stringify(cars));
  });

program
  .command("delete")
  .description("deletes car into the file")
  .argument("<id>", "id of the car")
  .action(async (id) => {
    const cars = await readFile("cars.json", false);
    const index = cars.findIndex((car) => car.id === Number(id));
    if (index === -1) {
      console.log("could not find the car");
      return;
    }
    const deletedCar = cars.splice(index, 1);
    await writeFile("cars.json", JSON.stringify(cars));
    console.log(deletedCar);
  });

program
  .command("carById")
  .description("deletes car into the file")
  .argument("<id>", "id of the car")
  .action(async (id) => {
    const cars = await readFile("cars.json", false);    
    const car = cars.filter((car) => car.id === Number(id))[0];    
    if (!car) {
      console.log("could not find the car");
      return;
    }
    console.log(car);
  });

program
  .command("allCars")
  .description("deletes car into the file")
  .action(async () => {
    const cars = await readFile("cars.json", false);    
    console.log(cars);
  });

program.parse();
