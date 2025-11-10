//looping statmemnts 
//for loop
for (let i = 1; i <= 5; i++) {
    console.log('Iteration number: ' + i);
}

//while loop
let j = 1;
while (j <= 20) {
    console.log('While loop iteration: ' + j);
    j++;
}

// while loop example 2
let i =1;
while(i<=20){
    if(i%2==0) {
        console.log(i + " is even number");
    } 
    if(i%2!=0){
        console.log(i + " is odd number");
    }
    i++;
}   

// do while loop
let k = 1;
do {
    console.log('Do-While loop iteration: ' + k);
    k++;
} while (k <= 5);

// do while loop example 2
let m = 1;
do {
    console.log('Current number: ' + m);
    m++;
} while (m >= 10);