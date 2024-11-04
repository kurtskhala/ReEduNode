#! /usr/bin/env node

// 1)Create a weather API CLI tool that:
//         /Takes a city name as input. eg: weather-api tbilisi
//         /Fetches and displays the exact temperature in Celsius using this API endpoint:
//   API: https://api.openweathermap.org/data/2.5/weather?q={cityName}&units=metric&appid=895284fb2d2c50a520ea537456963d9c
// use: node-fetch and commander

import { Command } from "commander";
const program = new Command();
import fetch from "node-fetch";

program
  .command("temperature")
  .description("returns temperature of specific city")
  .argument("<city>", "name of the city")
  .action( async (city) => {
    const resp = await  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=895284fb2d2c50a520ea537456963d9c`);
    const data = await resp.json();
    console.log(data.main.temp);
  });

program.parse();
