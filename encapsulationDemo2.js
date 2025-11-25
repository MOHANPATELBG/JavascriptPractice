// Private properties and methods in JavaScript classes
// Private properties and methods are accessible only within the class they are defined in.
class Person {
    // Private property
    #name;  
    // Constructor to initialize the private property
    constructor(name) {
        this.#name = name;
    }   
    // Public method to get the private property
    getName() {
        return this.#name;
    }   
    // Private method
    #greet() {
        return `Hello, my name is ${this.#name}.`;
    }
    // Public method to call the private method
    introduce() {
        return this.#greet();
    }   
}       
// Creating an instance of the Person class
const person = new Person('Alice');
// Using public methods to access private properties and methods
console.log(person.getName()); // Output: Alice
console.log(person.introduce()); // Output: Hello, my name is Alice.
// Attempting to access private property and method directly (will result in error)
// console.log(person.#name); // Uncommenting this line will throw a SyntaxError
// console.log(person.#greet()); // Uncommenting this line will throw a SyntaxError
// The private property #name and private method #greet cannot be accessed directly from outside the class, demonstrating encapsulation.        
// All interactions with the Person object must go through the public methods provided by the class.
// This ensures that the internal state of the Person object is protected and can only be modified in controlled ways.
// Output:
// Alice
// Hello, my name is Alice. 
