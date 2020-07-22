function getNthFib(n) {
    let start = 0
    let num1 = 0;
    let num2 =1;
    let fib = 0;
    if(n === 2 || n === 1)return 1;
    if( n === 0)return 0;
    while(start <= n){
        fib = (num1) + (num2);
        num1 = num2;
        num2 = fib;
        start++;
    }
    console.log(fib - num1);
    console.log((!+[]+[]+![]).length);
       return fib - num1
   }
   getNthFib(3);
   0,1,1,2,3,5,8,13
