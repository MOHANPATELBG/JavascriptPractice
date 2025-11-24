let fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
console.log('Initial Array: ',fruits);
// Add 'fig' to the end of the array
fruits.push('fig'); 
console.log('After PUSH :', fruits);

// Remove the last element from the array
fruits.pop('fig');
console.log('After a POP:',fruits);

// Remove the first element from the array
console.log('Before a SHIFT:',fruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']
fruits.shift();
console.log('After a SHIFT:',fruits); // ['banana', 'cherry', 'date', 'elderberry', 'fig']

//unshift 'apple' to the beginning of the array
fruits.unshift('apple');
console.log('After a UNSHIFT:',fruits); // ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

// Find the index of 'cherry' in the array
let cherryIndex = fruits.indexOf('cherry'); 
console.log('Index if Cherry fruit: ',cherryIndex);  // 1

// Create a new array that contains only the fruits with more than 5 letters
let longFruits = fruits.filter(fruit => fruit.length > 5);  
console.log('new array that contains only the fruits with more than 5 letters: ',longFruits);   // ['cherry', 'elderberry']

// Create a new array that contains the lengths of each fruit name
let fruitLengths = fruits.map(fruit => fruit.length);   
console.log('new array that contains the lengths of each fruit name',fruitLengths); // [6, 6, 4, 10, 3]  

// toString method demonstration
let fruitsString = fruits.toString();
console.log(fruitsString);  // 'banana,cherry,date,elderberry,fig'  
console.log(fruits);          // ['banana', 'cherry', 'date', 'elderberry', 'fig']

console.log('Fruits after toString: ',fruitsString, typeof fruitsString);  // 'banana,cherry,date,elderberry,fig' 'string'
console.log('Fruits array',fruits, typeof fruits);          // ['banana', 'cherry', 'date', 'elderberry', 'fig'] 'object'

//demonstarting join method
let fruitsJoined = fruits.join(' - ');
console.log('Fruits after join: ',fruitsJoined);

// demonstrating splice method
// Remove 1 element at index 2 and add 'coconut' and 'dragonfruit'
fruits.splice(2, 1, 'coconut', 'dragonfruit');
console.log('After SPLICE:', fruits); // ['banana', 'cherry', 'coconut', 'dragonfruit', 'elderberry', 'fig']


// demonstrating slice method
// Create a new array with elements from index 1 to 4 (excluding 4)
let slicedFruits = fruits.slice(1, 4);
console.log('Sliced Fruits:', slicedFruits); // ['cherry', 'coconut', 'dragonfruit']

// demonstrating concat method
let moreFruits = ['grape', 'honeydew'];
let allFruits = fruits.concat(moreFruits);
console.log('After CONCAT:', allFruits); // ['banana', 'cherry', 'coconut', 'dragonfruit', 'elderberry', 'fig', 'grape', 'honeydew']

// demonstarting sort method
allFruits.sort();
console.log('After SORT:', allFruits); // Sorted array

// demonstrating reverse method
allFruits.reverse();
console.log('After REVERSE:', allFruits); // Reversed array
console.log('Final Fruits Array:', fruits);
