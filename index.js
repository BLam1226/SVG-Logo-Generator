// Description: This is the main file of the project. It calls the logoGenerator function and awaits its result.
const generateLogo = require("./lib/logoGenerator");
const fs = require("fs");

async function main() {
  await generateLogo(); // Call the function and await its result
}

main();
