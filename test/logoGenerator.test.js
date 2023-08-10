const fs = require("fs");
const generateLogo = require("../lib/logoGenerator");

describe("generateLogo", () => {
  const mockUserInput = {
    text: "test",
    textColor: "black",
    shape: "circle",
    shapeColor: "red",
  };

  // Mock the getUserInput function
  jest.mock("../lib/userInputs", () => {
    return jest.fn(() => Promise.resolve(mockUserInput));
  });

  // Mock the fs.writeFileSync function
  jest.mock("fs", () => ({
    writeFileSync: jest.fn(),
  }));

  it("generates a logo SVG file", async () => {
    await generateLogo();

    expect(fs.writeFileSync).toHaveBeenCalled();
  }, 10000);
});
