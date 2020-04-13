function sameFrequency(num1,num2){
    if(num1.length !== num2.length)return;
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()
    let freqCount1 = {};
    let freqCount2 = {};
    
    while(strNum1 || strNum2){
        let i1 = 0
        let i2 = 0
       let number1 = strNum1[i1]
       let number2 = strNum2[i2]
        if(num1){
         
            freqCount1.number1 = freqCount1[number1] === 0 ? freqCount1.number1 =1 :freqCount1.number1 +=1
            i1++
        }
        if(num2){
             freqCount2.number2 = freqCount2[number2] === 0 ? freqCount2.number2 =1 :freqCount2.number2 +=1
             i2++
        }
        break;
    }
    for( let key in freqCount1){
        if(freqCount1[key] !== freqCount2[key]){
            console.log(false)
            return false
        }
    }
    console.log(true)
    return true
  }
  sameFrequency(123,123)