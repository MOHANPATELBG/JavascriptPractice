// Prototype JavaScript framework, version 1.7.3
// prototype is used to extend the functionality of JavaScript by adding new methods and properties to existing objects 
// and classes. It provides a set of utility functions and features that make it easier to work with JavaScript, 
// especially in web development. The framework includes features for DOM manipulation, event handling, AJAX requests, and more.
// It also allows developers to create custom classes and extend existing ones, promoting code reusability and maintainability.
function student() {
  this.name = "Mohan";
  this.city = "New York";
}

// student.prototype.getName = function() {
//   return this.name;
// }

// student.prototype.getCity = function() {
//   return this.city;
// }
student.prototype.age = 35;

let stu1 = new student();
console.log(stu1.age);
console.log(stu1.name);
console.log(stu1.city);
let stu2 = new student();

// console.log(stu1.getName());
// console.log(stu1.getCity());

console.log(stu2.age);
console.log(stu2.name);
console.log(stu2.city);