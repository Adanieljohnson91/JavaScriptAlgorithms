//define a functions that takes two strings
// set a counter to keep track of matches
// loop through the longer string
//loop through the shorter string
//if character matches check the second character and repeat so while-
//characters match loop, once exited, check values, if equal add to counter

function naiveStringSearch(sentence, string){
    let counter = 0;
    let word = "";
    for(let i = 0; i< sentence.length; i++){
        for(let j = 0; j< string.length; j++){
            if(sentence[i]===string[j]){
                while(sentence[i]===string[j]){
                    word+=sentence[i]
                    i+= 1
                    j+= 1
                }
                if(word === string){
                    counter++ 
                    j=0
                }
               
                console.log("hit if")
                console.log(counter)
            }

        }
    }
    console.log("0")
   
    
}
//console.log(naiveStringSearch("isisomgisomg", "omg"));

function naiveSearch(long,short){
    let count = 0;
    for(let i = 0; i < long.length; i++){
        for(let j = 0; j < short.length; j++){
            if(short[j] !== long[i+j])break;
            if(j === short.length - 1) count++;
        }
    }
    return count;
}
const one = naiveSearch("this is a test hi hi hi hi", "hi");
console.log(one);