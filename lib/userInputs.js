// lib/userInputs.js
const inquirer = require("inquirer");

async function getUserInput() {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter up to three characters for the logo:",
      validate: (input) => input.length <= 3,
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter text color (color keyword or hexadecimal number):",
      validate: (input) => isValidColor(input),
    },
    {
      type: "list",
      name: "shape",
      message: "Choose a shape:",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "Enter shape color (color keyword or hexadecimal number):",
      validate: (input) => isValidColor(input),
    },
  ]);

  return userInput;
}

function isValidColor(input) {
  // for simplicity, we will assume all inputs are valid colors
  return true;
}

module.exports = getUserInput;
