//Multi-Inheritance: In object-oriented programming, multiple inheritance is a feature that allows a class to inherit characteristics and behaviors (properties and methods) from more than one parent class.
//JavaScript does not support multiple inheritance directly through classes, but it can be achieved using mixins or by combining prototypes.
// Example of Multiple Inheritance using Mixins in JavaScript
// Mixin function to copy properties and methods from source to target
// function mixin(target, ...sources) {
//     Object.assign(target.prototype, ...sources);
// }
// Defining first parent class
class CanFly {
    fly() {
        return `${this.name} is flying.`;
    }
}
// Defining second parent class
class CanSwim {
    swim() {
        return `${this.name} is swimming.`;
    }
}
// Defining a child class that will inherit from both CanFly and CanSwim
class Duck {    
    constructor(name) {
        this.name = name;
    }
}
// Applying mixins to Duck class
Object.assign(Duck.prototype, CanFly, CanSwim);
// Creating an instance of the Duck class
let daffy = new Duck('Daffy Duck');
// Using methods from both parent classes
console.log(daffy.fly());  // Output: Daffy Duck is flying.
console.log(daffy.swim()); // Output: Daffy Duck is swimming.
// The Duck class has inherited methods from both CanFly and CanSwim classes, demonstrating multiple inheritance using mixins in JavaScript.
// Output:
// Daffy Duck is flying.
// Daffy Duck is swimming.