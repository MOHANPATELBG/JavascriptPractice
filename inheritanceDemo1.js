// Inheritance Demo in JavaScript
// Inheritance allows a class (child class) to inherit properties and methods from another class (parent class).
// This promotes code reusability and establishes a hierarchical relationship between classes.
// Defining a parent class
class Animal {
    // Constructor to initialize the animal's name
    constructor(name) {
        this.name = name;
    }
    // Method to make the animal sound
    makeSound() {
        return `${this.name} makes a sound.`;
    }
}
// Defining a child class that inherits from the parent class
class Dog extends Animal {
    // Constructor to initialize the dog's name and breed
    constructor(name, breed) {
        // Calling the parent class constructor
        super(name);
        this.breed = breed;
    }
    // Overriding the makeSound method
    makeSound() {
        return `${this.name} barks.`;
    }
    // Method specific to the Dog class
    fetch() {
        return `${this.name} is fetching the ball.`;
    }
}