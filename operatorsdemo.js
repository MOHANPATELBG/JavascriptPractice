// relational and comparession operatorsdemo
// always return boolean values true or false
let x = 66;
let y = 85;
console.log('x = ' + x + ', y = ' + y);         
console.log('x == y : ' + (x == y));   // equal to
console.log('x != y : ' + (x != y));   // not equal to
console.log('x === y : ' + (x === y)); // strict equal to
console.log('x !== y : ' + (x !== y)); // strict not equal to
console.log('x > y : ' + (x > y));     // greater than
console.log('x < y : ' + (x < y));     // less than
console.log('x >= y : ' + (x >= y));    // greater than or equal to
console.log('x <= y : ' + (x <= y));    // less than or equal to

x = 66;
y = "85";
console.log('x = ' + x + ', y = ' + y);         
console.log('x == y : ' + (x == y));   // equal to
console.log('x != y : ' + (x != y));   // not equal to
console.log('x === y : ' + (x === y)); // strict equal to
console.log('x !== y : ' + (x !== y)); // strict not equal to
console.log('x > y : ' + (x > y));     // greater than
console.log('x < y : ' + (x < y));     // less than
console.log('x >= y : ' + (x >= y));    // greater than or equal to
console.log('x <= y : ' + (x <= y));    // less than or equal to

//Assignment operatorsdemo
let a = 50;
console.log('Initial value of a: ' + a);
a += 10; 
console.log('After a += 10: ' + a);
a -= 5; 
console.log('After a -= 5: ' + a);  
a *= 7;
console.log('After a *= 7: ' + a);
a /= 3; 
console.log('After a /= 3: ' + a);  
a %= 9; 
console.log('After a %= 9: ' + a);

// logical operatorsdemo
let m = true;
let n = false;
console.log('m = ' + m + ', n = ' + n);         
console.log('m && n : ' + (m && n));  // logical AND
console.log('m || n : ' + (m || n));  // logical OR
console.log('!m : ' + (!m));          // logical NOT
console.log('!n : ' + (!n));          // logical NOT

// ternary operatordemo
let age = 20;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log('Age: ' + age + ' - ' + eligibility);

// bitwise operatorsdemo
let p = 5;  // binary: 0101
let q = 3;  // binary: 0011
console.log('p = ' + p + ', q = ' + q);         
console.log('p & q : ' + (p & q));  // bitwise AND
console.log('p | q : ' + (p | q));  // bitwise OR
console.log('p ^ q : ' + (p ^ q));  // bitwise XOR
console.log('~p : ' + (~p));         // bitwise NOT
console.log('p << 1 : ' + (p << 1)); // left shift
console.log('p >> 1 : ' + (p >> 1)); // right shift     
