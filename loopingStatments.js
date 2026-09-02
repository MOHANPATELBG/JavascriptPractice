//looping statmemnts 
//for loop
for (let i = 1; i <= 5; i++) {
    console.log('Iteration number: ' + i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip the iteration when i is 3
    }
    console.log('Iteration number: ' + i);
}
// op: 1 2 4 5

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stop the loop when i is 3
    }
    console.log('Iteration number: ' + i);
}
// op: 1 2



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
    console.log('Current number m: ' + m);
    m++;
} while (m >= 10);


let x =0 

while (x <= 5) {
    x++;
    if(x==3){
        continue;
    }
    console.log('Current number: ' + x);
}

//op: 1
//2
//4
//5
//6

let y =0 

while (y <= 5) {
    y++;
    if(y==3){
        break;
    }
    console.log('Current number: ' + y);
}
//op: 1
//2
