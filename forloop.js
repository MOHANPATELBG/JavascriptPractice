//print 1-20
for(let i=1; i<=20; i++){
    console.log(i);
}

//print even numbers between 1-30
for(let i=2; i<=30; i+=2){
    console.log(i);
}

//print odd numbers between 1-30
for(let i=1; i<=30; i+=2){
    console.log(i);
}

//fibonacci series up to n terms
function febonacci(n){
    let a = 0, b = 1, nextTerm;
    console.log("Fibonacci Series:");
    for (let i = 1; i <= n; i++) {  // a=0 1, b=1 1
        console.log('Fibbonace serioes at',i, 'a=',a, ' b=',b, ' is= ',a);  //0
        nextTerm = a + b;  // 1
        a = b;  //1
        b = nextTerm; //1
    }
}
febonacci(10);