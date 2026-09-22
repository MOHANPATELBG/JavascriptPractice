// using prototype in class 

class student {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

student.prototype.age = 35;

student.prototype.displayInfo = function() {
  return `Name: ${this.name}, City: ${this.city}, Age: ${this.age}`;
}

let stu1 = new student("Mohan", "New York");
console.log(stu1.age);
console.log(stu1.name);
console.log(stu1.city);
console.log(stu1.displayInfo());
let stu2 = new student("Alice", "Los Angeles");

console.log(stu2.age);
console.log(stu2.name);
console.log(stu2.city);
console.log(stu2.displayInfo());