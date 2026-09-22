// Hyrarchical Inheritance
// In hierarchical inheritance, multiple classes inherit from a single parent class. 
// This allows for code reusability and establishes a relationship between the parent and child classes.
// Here we achieved method overriding in hierarchical inheritance.

// Defining a parent class
class Animal {
    // Constructor to initialize the animal's name  
    constructor(name) {
        this.name = name;
    }   
    // Method to make the animal speak
    speak() {
        return `${this.name} makes a sound.`;
    }  
} 
// Defining a child class that inherits from the parent class
class Dog extends Animal {
    // Overriding the speak method to provide specific behavior for Dog
    speak() {
        return `${this.name} barks.`;
    }   
}   
// Defining another child class that inherits from the parent class
class Cat extends Animal {
    // Overriding the speak method to provide specific behavior for Cat
    speak() {
        return `${this.name} meows.`;
    }
}
// Creating instances of the child classes
const dog = new Dog('Buddy');
const cat = new Cat('Whiskers');
// Using the speak method from both child classes
console.log(dog.speak()); // Output: Buddy barks.
console.log(cat.speak()); // Output: Whiskers meows.
// The Dog and Cat classes inherit from the Animal class and override the speak method to provide specific behavior for each animal type.   

// Output:
// Buddy barks.
// Whiskers meows.