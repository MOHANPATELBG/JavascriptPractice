// Polymorphism Demo in JavaScript
// Polymorphism allows methods to do different things based on the object it is acting upon.
// It enables a single interface to represent different underlying forms (data types).
// In JavaScript, polymorphism is often achieved through method overriding in inheritance.

// Defining a parent class
class Shape {
    // Method to calculate area (to be overridden by subclasses)
    area() {
        return 0;
    }
}
// Defining a child class for Circle that inherits from Shape
class Circle extends Shape {
    // Constructor to initialize the radius
    constructor(radius) {
        super();
        this.radius = radius;
    }
    // Overriding the area method to calculate the area of a circle
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
// Defining a child class for Rectangle that inherits from Shape
class Rectangle extends Shape {
    // Constructor to initialize width and height
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    // Overriding the area method to calculate the area of a rectangle
    area() {
        return this.width * this.height;
    }
}
// Creating instances of Circle and Rectangle
const myCircle = new Circle(5);
const myRectangle = new Rectangle(4, 6);
// Using the area method on different objects
console.log(`Area of Circle: ${myCircle.area()}`);       // Output: Area of Circle: 78.53981633974483
console.log(`Area of Rectangle: ${myRectangle.area()}`); // Output: Area of Rectangle: 24
// The area method behaves differently based on the object type, demonstrating polymorphism.
// Output:
// Area of Circle: 78.53981633974483
// Area of Rectangle: 24