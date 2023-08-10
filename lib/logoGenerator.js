const { Circle, Triangle, Square } = require("./shapes");
const getUserInput = require("./userInputs");
const fs = require("fs");
const path = require("path");

async function generateLogo() {
  console.log("Generating logo...");

  try {
    const { text, textColor, shape, shapeColor } = await getUserInput();
    console.log("received user input:", text, textColor, shape, shapeColor);

    let shapeInstance;

    switch (shape) {
      case "circle":
        shapeInstance = new Circle();
        break;
      case "triangle":
        shapeInstance = new Triangle();
        break;
      case "square":
        shapeInstance = new Square();
        break;
      default:
        throw new Error("Invalid shape choice");
    }

    // Set colors for shape
    shapeInstance.setColor(shapeColor);

    // Generate SVG code for the logo
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
      ${shapeInstance.render()}
      <text x="50%" y="50%" font-family="Arial" font-size="40" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
    </svg>`;

    const filePath = path.join(process.cwd(), "logo.svg");
    fs.writeFileSync(filePath, svgCode);
    console.log("Generated logo.svg");
  } catch (error) {
    console.error("Error generating logo:", error.message);
  }
}

module.exports = generateLogo;
