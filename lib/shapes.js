// lib/shapes.js
class Shape {
  constructor() {
    this.color = ""; // Initialize the shape color
  }

  setColor(color) {
    this.color = color; // Set the color for the shape
  }

  render() {
    throw new Error("You have to implement the render method");
  }
}

class Circle extends Shape {
  constructor() {
    super();
    // Initialize additional properties specific to a circle
  }

  render() {
    return `<circle cx="150" cy="100" r="70" fill="${this.color}" />`;
  }
}

class Triangle extends Shape {
  constructor() {
    super();
    // Initialize additional properties specific to a triangle
  }

  render() {
    return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
  }
}

class Square extends Shape {
  constructor() {
    super();
    // Initialize additional properties specific to a square
  }

  render() {
    return `<rect x="56" y="20" width="188" height="188" fill="${this.color}" />`;
  }
}

module.exports = {
  Circle,
  Triangle,
  Square,
};
