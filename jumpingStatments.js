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