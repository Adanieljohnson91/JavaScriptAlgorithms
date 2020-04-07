//anagram function find if arrays contain the same letters
function anagram(array1, array2){
    // check for length, if length is not equal the value is false


    if(array1.length !== array2.length){
       
        console.log("false");
        return false;
    }
    // creating an object to hold each letter as a key and set values to the number of times the letters occue
    let lookup = {};
    for(let i = 0; i < array1.length; i++){

        // let the current letter equal the index value of the array
        let letter = array1[i]
        // conditionally if the letter add 1 if letter is 0 add 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
        console.log(lookup);
    }

    for(let i = 0; i < array2.length; i++){
        let letter = array2[i]
        //if lookup object does not contain the letter return false
        if(!lookup[letter]){
            console.log("false"); 
            return false;
           
        } else {
            // else subtract 1 from the value
            lookup[letter] -= 1
            console.log(lookup);
        }
    }
    //end of loop if exited return true
  console.log("true");
return true;   
}
anagram("this", "siht");
//LENGTH
//Object
//LOOP
//SUBTRACT
