var a;

a=3131991;
console.log("The value of a is: "+a);  
console.log('\n');
console.log("The data type of a is: "+(typeof a));
document.write(a);
a="Mohan";
console.log("The value of a is: "+a);   
console.log("The data type of a is: "+(typeof a));
document.write(a);
a=true;
console.log("The value of a is: "+a);   
console.log("The data type of a is: "+(typeof a));
document.write(a);
a=null;
console.log("The value of a is: "+a);   
console.log("The data type of a is: "+(typeof a));
document.write(a);
// a=Symbol("Mohan");
// console.log("The value of a is: "+a);
// console.log("The data type of a is: "+(typeof a));
// document.write(a);
a=BigInt("1234567890123456789012345678901234567890");
console.log("The value of a is: "+a);
console.log("The data type of a is: "+(typeof a));
document.write(a);
a=undefined;
console.log("The value of a is: "+a);
console.log("The data type of a is: "+(typeof a));  
document.write(a);
a={name:"Mohan", age:32};
console.log("The value of a is: "+JSON.stringify(a));
console.log("The data type of a is: "+(typeof a));  
document.write(a);
a=[1,2,3,4,5];
console.log("The value of a is: "+a);
console.log("The data type of a is: "+(typeof a));
document.write(a);
a=function(){
    return "Hello World";
}           
console.log("The value of a is: "+a());
console.log("The data type of a is: "+(typeof a));
document.write(a);

