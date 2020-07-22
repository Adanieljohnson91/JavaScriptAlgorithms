var myAtoi = function(str) {
    str.replace(/ /g);
    console.log("str1", str)
    if(str.length === 0)return 0;
    let neg = 1;
    let num = []
    for(let i; i < str.length; i++){
           let s = str[i]
           if(s === "-"){
               neg = -1
           }
        if(str[i] == +str[i]){
            console.log("here", str[i])
            num.push(str[i])
        }
    }
    console.log("str2", str, "num", num)
    let result = Number(num.join("")) * neg
    if(result > Math.pow(2,32)){
        return Math.pow(2,32);
    }else if(result <  Math.pow(2,31)*-1){
        return Math.pow(2,31)*-1
    }else{
        return result
    }
};
console.log(myAtoi("-4109 this is a test   "))