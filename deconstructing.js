//deconstruction of objects and arrays

// Object Deconstruction    
const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345'
    }   
};

// Deconstructing the object
const { name, age, address: { city, zip } } = person;
console.log(name); // Output: John Doe
console.log(age);  // Output: 30
console.log(city); // Output: Anytown
console.log(zip);  // Output: 12345 
// Output:
// John Doe
// 30
// Anytown
// 12345

// Array Deconstruction
const numbers = [1, 2, 3, 4, 5];
// Deconstructing the array
const [first, second, , fourth] = numbers;
console.log(first);  // Output: 1
console.log(second); // Output: 2
console.log(fourth); // Output: 4
// Output:
// 1
// 2
// 4            

// Swapping variables using array deconstruction
let a = 10;
let b = 20;
console.log(`Before Swap: a = ${a}, b = ${b}`);
[a, b] = [b, a];
console.log(`After Swap: a = ${a}, b = ${b}`);
// Output:
// Before Swap: a = 10, b = 20
// After Swap: a = 20, b = 10
// Deconstructing function parameters
function displayPerson({ name, age, address: { street } }) {
    console.log(`Name: ${name}, Age: ${age}, Street: ${street}`);
}   
displayPerson(person);
// Output: Name: John Doe, Age: 30, Street: 123 Main St
// Summary of Deconstruction
// Deconstruction allows extracting values from objects and arrays into distinct variables.
// It enhances code readability and reduces the need for repetitive access to object properties or array elements.
// It can also be used for swapping variables and deconstructing function parameters.
// Output:
// John Doe
// 30