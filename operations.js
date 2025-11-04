let a =120;
let b =100;

// Addition 
let add = a + b;
// document.write ('Addition: ' + a + ' + ' + b + ' = ' + add + '<br>');
console.log('Addition: ' + a + ' + ' + b + ' = ' + add);

// Subtraction
let subtract = a - b;
// document.write ('Subtraction: ' + a + ' - ' + b + ' = ' + subtract + '<br>');
console.log('Subtraction: ' + a + ' - ' + b + ' = ' + subtract);

// Multiplication
let multiply = a * b;
// document.write ('Multiplication: ' + a + ' * ' + b + ' = ' + multiply + '<br>');
console.log('Multiplication: ' + a + ' * ' + b + ' = ' + multiply);

// Division
let divide = a / b;
// document.write ('Division: ' + a + ' / ' + b + ' = ' + divide + '<br>');
console.log('Division: ' + a + ' / ' + b + ' = ' + divide); 

// Modulus
let modulus = a % b;
// document.write ('Modulus: ' + a + ' % ' + b + ' = ' + modulus + '<br>');
console.log('Modulus: ' + a + ' % ' + b + ' = ' + modulus);

// power of
let powerOf = a ** 2;
// document.write ('Power of: ' + a + ' ** 2 = ' + powerOf + '<br>');
console.log('Power of: ' + a + ' ** 2 = ' + powerOf);

// Increment
let increment = ++a;
// document.write ('Increment: ++' + (a-1) + ' = ' + increment + '<br>');
console.log('Increment: ++' + (a-1) + ' = ' + increment);
let c=1;
console.log(++c); // Pre Increment will change value in the same line
console.log(c++); // Post Imcrement will not change value in the same line
console.log(c);
let e = c++; //here the value of c assigned before increment so the value of e will be the value before increment
console.log(c);
console.log(e);

// Decrement
let decrement = --b;    
// document.write ('Decrement: --' + (b+1) + ' = ' + decrement + '<br>');
console.log('Decrement: --' + (b+1) + ' = ' + decrement);
let d=10;
console.log(--d); // Pre Decrement will change value in the same line
console.log(d--); // Post Decrement will not change value in the same line
console.log(d); 
e = d--;  //here the value of d assigned before decrement so the value of e will be the value before decrement
console.log(d);
console.log(e);