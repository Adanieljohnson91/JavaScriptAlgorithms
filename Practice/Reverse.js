var reverse = function(x) {
    let pos = -1
    let newNum = x.toString().split('').reverse().join('')
    if(x < 0){
        newNum =  (newNum.replace(/-/g,'')) * pos
    }
    if(Number.isSafeInteger(Number(newNum))){
        return newNum
    }else{ 
        return 0;
    }   
};
//console.log(reverse(123))

const reverseV2 = function(x){
    let result = 0
    while(x !== 0){
        result *= 10;
        console.log(result, "1");
        result += x % 10;
        console.log(result, "2");
        console.log(Math.floor(x/10), "floor", Math.ceil(x/10), "ceil");
        x = x> 0? Math.floor(x/10): Math.ceil(x/10);
        console.log(x, "x")
    }
    if(result > Math.pow(2,31) - 1 || result < -Math.pow(2,31)) return 0;
    console.log(result, "result");
    return result
}
reverseV2(350);

//
let newNum = x.toString().split('').reverse().join('')
    newNum = x < 0 ? (newNum.replace(/-/g,'')) * -1 : newNum
    newNum = Math.abs(newNum) <  2147483647 ? newNum : 0
    return newNum