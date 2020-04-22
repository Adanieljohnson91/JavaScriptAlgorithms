const lengthOfLongestSubString = (string)=>{
   if(string.length === 0) return 0
   if(string.length === 1) return 1
   let map = {};
   let counter = 0;
   let largestString = 0
   for(let i = 0; i < string.length; i++){
       console.log(i, "i")
       let letter = string[i]
       map[letter] = letter
       for(let j = i+1; j < string.length;j++){
           console.log(j, "j")
            let nLetter = string[j]
            map[nLetter] = nLetter;
            if(map[string[j]]){
                console.log('hit')
                counter = 0
                break;
            }else{
                counter++
            }
            if(counter > largestString){
                largestString = counter;
            }
       }
   }
   console.log(largestString);

}
lengthOfLongestSubString("abcbefg")
