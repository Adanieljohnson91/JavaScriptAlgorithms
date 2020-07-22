function fizzBuzz(s){
    // for(let i = 1; i <= s; i++){
    //     if(i % 15 === 0){
    //       console.log("FizzBuzz");
    //     }else if(i % 3 === 0){
    //       console.log('Fizz')
    //     }else if(i % 5 === 0){
    //       console.log('Buzz')
    //     }else{
    //        console.log(i);
    //     }
    // }
    for(let i=1;i<=s;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
}
fizzBuzz(100);