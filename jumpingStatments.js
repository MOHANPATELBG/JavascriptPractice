//Jumping statments are used to transfer control to another part of the program
//There are 4 jumping statements in JavaScript
//1. break
//2. continue
//3. return
//4. labeled statement

//break statement
for(let i=1; i<=10; i++){
    if(i==6){
        break;  //loop will stop when i=6
    }   
    console.log(i);
}

let i = 0;
while(i<=20){
    if(i==16){
        break;  //loop will stop when i=16
    }
    console.log(i);
    i++
}

//continue statement
for(let j=1; j<=10; j++){
    if(j==6){
        continue;  //skip the value when j=6
    }   
    console.log(j);
}

let k = 0;
while(k<=20){
    if(k==16){
        k++;
        continue;  //skip the value when j=6
    }
    console.log(k);
    k++
}


// return statement
function add(a, b){
    return a + b;  //function will return the sum of a and b
}
let sum = add(5, 10);
console.log(`Sum is: ${sum}`);

//labeled statement
outerLoop:
for(let m=1; m<=5; m++){    
    for(let n=1; n<=5; n++){
        if(m==3 && n==3){
            break outerLoop;  //breaks out of the outer loop when m=3 and n=3
        }   
        console.log(`m: ${m}, n: ${n}`);
    }
}

innerLoop:
for(let p=1; p<=5; p++){    
    for(let q=1; q<=5; q++){
        if(p==3 && q==3){
            continue innerLoop;  //continues the outer loop when p=3 and q=3
        }   
        console.log(`p: ${p}, q: ${q}`);
    }
}   