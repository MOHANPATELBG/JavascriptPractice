//spred operator.js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
// Merging two arrays using the spread operator
const mergedArray = [...arr1, ...arr2];
console.log('Merged Array:', mergedArray);
// Output: Merged Array: [1, 2, 3, 4, 5, 6]
// Copying an array using the spread operator
const originalArray = [7, 8, 9];
const copiedArray = [...originalArray];
console.log('Copied Array:', copiedArray);
// Output: Copied Array: [7, 8, 9]
// Merging two objects using the spread operator
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log('Merged Object:', mergedObject);
// Output: Merged Object: { a: 1, b: 2, c: 3, d: 4 }
// Copying an object using the spread operator
const originalObject = { x: 10, y: 20 };
const copiedObject = { ...originalObject };
console.log('Copied Object:', copiedObject);
// Output: Copied Object: { x: 10, y: 20 }
// Using spread operator in function calls
function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1, 2, 3];
const total = sum(...numbers);
console.log('Sum using spread operator:', total);
// Output: Sum using spread operator: 6