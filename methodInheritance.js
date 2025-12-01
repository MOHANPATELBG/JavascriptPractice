// Method Inheritance in JavaScript
// Method inheritance allows a class (child class) to inherit methods from another class (parent class).
// This promotes code reusability and establishes a hierarchical relationship between classes.
// Defining a parent class
class Person {
    // Constructor to initialize the person's name
    constructor(name) {
        this.name = name;
    }
    // Method to introduce the person
    introduce() {
        return `Hello, my name is ${this.name}.`;
    }
}
// Defining a child class that inherits from the parent class
class Student extends Person {
    // Constructor to initialize the student's name and grade
    constructor(name, grade) {
        // Calling the parent class constructor
        super(name);
        this.grade = grade;
    }
    // Overriding the introduce method to include grade
    introduce() {
        return `Hello, my name is ${this.name} and I am in grade ${this.grade}.`;
    }
    // Method specific to the Student class
    study() {
        return `${this.name} is studying.`;
    }
}
// Creating an instance of the parent class
const person = new Person('Alice'); 
console.log(person.introduce()); // Output: Hello, my name is Alice.
// Creating an instance of the child class
const student = new Student('Bob', 10);
console.log(student.introduce()); // Output: Hello, my name is Bob and I am in grade 10.
console.log(student.study());     // Output: Bob is studying!
// The Student class inherits the introduce method from the Person class and overrides it to provide additional functionality.
console.log(student instanceof Person); // Output: true
console.log(student instanceof Student); // Output: true
// This shows that student is an instance of both Student and Person classes.
// Output:
// Hello, my name is Alice.
// Hello, my name is Bob and I am in grade 10.
// Bob is studying!
// true
// true