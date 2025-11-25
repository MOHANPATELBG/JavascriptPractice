//Class and Object in JavaScript
//class is a blueprint for creating objects. It encapsulates data for the object and methods to manipulate that data.
//An object is an instance of a class. It contains data and methods defined by the class.
//Calss consists of properties and methods.
//constructor is a special method for creating and initializing an object created with a class. 
//The constructor method is called automatically when a new object is created.
//Properties are variables that belong to the class.
//Methods are functions that belong to the class.
//Defining a class
class Car {
    //constructor method to initialize object properties
    constructor(brand, model, year) {   
        this.brand = brand; //property
        this.model = model; //property
        this.year = year;   //property
    }   
    //method to display car details
    displayInfo() {
        return `${this.year} ${this.brand} ${this.model}`;
    }
}

//Creating an object (instance) of the class
const myCar = new Car('Toyota', 'Corolla', 2020);   
//Using the method of the object
console.log(myCar.displayInfo()); //Output: 2020 Toyota Corolla
//Creating another object (instance) of the class
const anotherCar = new Car('Honda', 'Civic', 2019);
console.log(anotherCar.displayInfo()); //Output: 2019 Honda Civic
//Modifying object properties
myCar.year = 2021;
console.log(myCar.displayInfo()); //Output: 2021 Toyota Corolla

