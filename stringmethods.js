// String methods examples
const str = "Hello, World!";
console.log(str.toUpperCase()); // "HELLO, WORLD!"
console.log(str.toLowerCase()); // "hello, world!"
console.log(str.indexOf("World")); // 7
console.log(str.slice(0, 5)); // "Hello"
console.log(str.replace("World", "JavaScript")); // "Hello, JavaScript!"
console.log(str.split(", ")); // ["Hello", "World!"]
console.log(str.charAt(0)); // "H"
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true
console.log(str.includes("lo, Wo")); // true    
console.log(str.repeat(2)); // "Hello, World!Hello, World!"
console.log(str.trim()); // "Hello, World!"
console.log(str.concat(" Welcome to string methods.")); // "Hello, World! Welcome to string methods."
console.log('Length of the string:', str.length); // 13 
console.log('Character code at index 1:', str.charCodeAt(1)); // 101
console.log('Substring from index 7 to 12:', str.substring(7, 12)); // "World"  
console.log('Last index of "o":', str.lastIndexOf("o")); // 8   
console.log('Split string into array of characters:', str.split('')); // Array of characters    
console.log('Pad start to length 20:', str.padStart(20, '*')); // "*******Hello, World!"
console.log('Pad end to length 20:', str.padEnd(20, '*')); // "Hello, World!*******"    
console.log('Repeat string 3 times:', str.repeat(3)); // "Hello, World!Hello, World!Hello, World!"  
console.log('Match "o" in string:', str.match(/o/g)); // ["o", "o"]  
console.log('Search for "World":', str.search("World")); // 7
console.log('Normalize string:', str.normalize()); // "Hello, World!"  
console.log('To locale upper case:', str.toLocaleUpperCase()); // "HELLO, WORLD!"
console.log('To locale lower case:', str.toLocaleLowerCase()); // "hello, world!"   
console.log('Slice from index -6 to end:', str.slice(-6)); // "World!"  
console.log('Substring from index 0 to 5:', str.substring(0, 5)); // "Hello"   
console.log('Value of string object:', str.valueOf()); // "Hello, World!"   
console.log('String from char codes:', String.fromCharCode(72, 101, 108, 108, 111)); // "Hello"
console.log('String from char codes using fromCodePoint:', String.fromCodePoint(72, 101, 108, 108, 111)); // "Hello"
console.log('Locale compare with "hello, world!":', str.localeCompare("hello, world!")); // 1   
console.log('To string method:', str.toString()); // "Hello, World!"    
console.log('Search for "Hello":', str.search("Hello")); // 0   
console.log('Trim start of string:', "   Hello   ".trimStart()); // "Hello   "  
console.log('Trim end of string:', "   Hello   ".trimEnd()); // "   Hello"  
console.log('Replace all "l" with "x":', str.replace(/l/g, 'x')); // "Hexxo, Worxd!"    
console.log('Get substring from index 7 with length 5:', str.substring(7, 5)); // "World"  
console.log('Get code point at index 1:', str.codePointAt(1)); // 101
console.log('String iterator:');
for (const char of str) {
    console.log(char);
}
console.log('-----------------------------------');