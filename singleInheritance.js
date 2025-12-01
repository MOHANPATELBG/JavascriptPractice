//Single Inheritance in JavaScript
// Single inheritance is a type of inheritance where a class (child class) inherits from one parent class.
// This allows the child class to reuse code from the parent class and extend its functionality.

// Defining a parent class
class Vehicle {
    // Constructor to initialize the vehicle's make and model   
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    // Method to display vehicle information
    displayInfo() {
        return `Vehicle Make: ${this.make}, Model: ${this.model}`;
    }
}
// Defining a child class that inherits from the parent class
class Car extends Vehicle { 
    // Constructor to initialize the car's make, model, and year
    constructor(make, model, year) {
        // Calling the parent class constructor
        super(make, model);
        this.year = year;
    }
    // Overriding the displayInfo method to include year
    displayInfo() {
        return `Car Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
    // Method specific to the Car class
    honk() {
        return `${this.make} ${this.model} goes beep beep!`;
    }
}
// Creating an instance of the parent class
const myVehicle = new Vehicle('Toyota', 'Corolla');
console.log(myVehicle.displayInfo()); // Output: Vehicle Make: Toyota, Model: Corolla
// Creating an instance of the child class
const myCar = new Car('Honda', 'Civic', 2020);
console.log(myCar.displayInfo()); // Output: Car Make: Honda, Model: Civic, Year: 2020
console.log(myCar.honk()); // Output: Honda Civic goes beep beep!
// The Car class inherits properties and methods from the Vehicle class, demonstrating single inheritance.
console.log(myCar instanceof Vehicle); // Output: true
console.log(myCar instanceof Car);     // Output: true  
// This shows that myCar is an instance of both Car and Vehicle classes.
// Output:
// Vehicle Make: Toyota, Model: Corolla
// Car Make: Honda, Model: Civic, Year: 2020
// Honda Civic goes beep beep!
// true
// true
