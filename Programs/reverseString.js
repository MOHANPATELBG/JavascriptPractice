let str1 = "Hello, World!";
// Reverse the string using a for loop
let reversedStr = "";
for (let i = str1.length - 1; i >= 0; i--) {
    reversedStr += str1[i];
}
console.log('Original string: ' + str1);
console.log('Reversed string: ' + reversedStr);