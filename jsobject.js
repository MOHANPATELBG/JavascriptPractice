let student = {
    name: "John Doe",
    age: 21,
    courses: ["Mathematics", "Physics", "Computer Science"],
    section: 'A',
    gender: 'Male'
};

console.log("Student Name: " + student.name);   
console.log("Student Age: " + student.age);  
console.log("Student Courses: " + student.courses);  
console.log("Student Section: " + student.section);  
console.log("Student Gender: " + student.gender);
console.log("Complete name : ", student['name']);

student.name = "Mohanpatel B G";
console.log("Updated Student Name: " + student.name);