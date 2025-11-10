//smallest of three numbers
let num1 = 10;
let num2 = 5;
let num3 = 8;
if(num1 <= num2 && num1 <= num3){
    console.log(num1 + " is the smallest number");
} else if(num2 <= num1 && num2 <= num3){
    console.log(num2 + " is the smallest number");
} else {
    console.log(num3 + " is the smallest number");
}

// week number based on weekname    
let weekName = "Wednesday";
let weekNumber;
switch(weekName){
    case "Monday":
        weekNumber = 1;
        break;
    case "Tuesday":
        weekNumber = 2;
        break;  
    case "Wednesday":       
        weekNumber = 3;
        break; 
    case "Thursday":
        weekNumber = 4;
        break;
    case "Friday":
        weekNumber = 5;
        break;  
    case "Saturday":
        weekNumber = 6;
        break;      
    case "Sunday":  
        weekNumber = 7;
        break;
    default:
        weekNumber = "Invalid week name";
}


// // Boy and girl age eligibility for marriage 
  
// // read input from user
// const girlOrBoy = window.prompt("girl or boy \n");
// const age = window.prompt("Enter age: \n");
 
// //girlOrBoy = girlOrBoy.toLowerCase();
// if(girlOrBoy == 'boy') {
//     if(age >= 21) {  
//         console.log("Boy is eligible for marriage");
//         document.write("Boy is eligible for marriage");
//     } else {
//         console.log("Boy is not eligible for marriage");
//         document.write("Boy is not eligible for marriage");
//     }
// }

// if(girlOrBoy == 'girl') {
//     if(age >= 18) {  
//         console.log("Girl is eligible for marriage");
//         document.write("Girl is eligible for marriage");
//     } else {
//         console.log("Girl is not eligible for marriage");
//         document.write("Girl is not eligible for marriage");
//     }
// }

let ageforMilitary = 20; // age input
let height = 5.0; // height input
let weight = 60; // weight input
// Military eligibility
if(ageforMilitary >= 18 ){
    if(height >=5.1 ){
        if(weight >= 50){
            console.log("Eligible for military service");
        } else {
            console.log("Not eligible for military service due to low weight");
        }
    } else {
        console.log("Not eligible for military service due to short height");
    }   
} else {
    console.log("Not eligible for military service due to low age");    
}