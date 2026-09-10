// JSON is JavaScript Object Notation
// It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.
// JSON is built on two structures:
// 1. A collection of name/value pairs (often realized as an object, record, struct, dictionary, hash table, keyed list, or associative array).
// 2. An ordered list of values (often realized as an array, vector, list, or sequence).

// Example of JSON representation
const jsonData = `{
    "name": "John Doe", 
    "age": 30,
    "isStudent": false,
    "courses": ["Math", "Science", "History"],
    "address": {    
        "street": "123 Main St",
        "city": "Anytown",
        "zip": "12345"
    }   
}`;

// Parsing JSON string to JavaScript object 
const obj = JSON.parse(jsonData);
console.log(obj.name); // Output: John Doe
console.log(obj.age);  // Output: 30
console.log(obj.courses[1]); // Output: Science
// Converting JavaScript object to JSON string
const jsonString = JSON.stringify(obj);
console.log(jsonString);
// Output: {"name":"John Doe","age":30,"isStudent":false,"courses":["Math","Science","History"],"address":{"street":"123 Main St","city":"Anytown","zip":"12345"}}  
// JSON is widely used for data exchange between a server and a web application as text.
// It is language-independent but uses conventions that are familiar to programmers of the C family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others.
// Output:
// John Doe
// 30
// Science
// {"name":"John Doe","age":30,"isStudent":false,"courses":["Math","Science","History"],"address":{"street":"123 Main St","city":"Anytown","zip":"12345"}}


//operation on JSON data
// Accessing JSON data
console.log(obj.address.city); // Output: Anytown   
// Modifying JSON data
obj.age = 31;
console.log(obj.age); // Output: 31
// Adding new property to JSON data
obj.email = "mbg.3191@gmail.com";
console.log(obj.email); // Output:mbg.3191@gmail.com



// Deleting property from JSON data
delete obj.isStudent;
console.log(obj.isStudent); // Output: undefined
// Iterating over JSON data
for (let course of obj.courses) {
    console.log(course);
}
// Output:
// Math
// Science
// History
