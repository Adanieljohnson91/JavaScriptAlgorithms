//L- checkLENGTH
//O- create empty OBJECT
//L-Loop to build
//S- loop to Subtract

function anagram(string1, string2){
    if(string1.length !== string2.length){
        return false;
    }
    let lookup = {};
    for(let i = 0; i < string1.length; i++){
        let letter = string1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for(let i = 0; i < string2.length; i++){
        let letter =string2[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]-= 1
            console.log(lookup)
        }
    }
    console.log(lookup)
    return true
}
//console.log(anagram("strink", "string"));
function anagram2(array1, array2){
    if(array1.length != array2.length){
        return false
    }
    let lookup = {}
    for(let i = 0; i < array1.length; i++){
        let letter = array1[i];
        lookup[letter] ? lookup[letter]=+1 : lookup[letter] = 1;
    }
    for(let i = 0; i < array2.length; i++){
        let letter = array2[i]
        if(!lookup[letter]){
            return false
        }else{
            lookup[letter]=-1
        }
    }
    console.log(true);
    return true;
}
anagram2("numbee", "number");