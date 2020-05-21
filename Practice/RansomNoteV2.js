//Taking in two strings one represents the note, the other a magazine
//check to see value within the string
//check if length of the first string is greater than second
//Check for special characters//Asume that there are no special characters
//Going to assume that all chartacters are lower case
function ransomNote(string1,string2){
   if(string1.length > string2.length || string1.length <= 0 )return false;
   let object = {}
   for(let i = 0; i < string2.length; i++){
       //Building out an object
        object[string2[i]] ? object[string2[i]]+=1:object[string2[i]] = 1 
   }
   for(let i = 0; i < string1.length; i++){
       if(object[string1[i]]){
        object[string1[i]] -= 1
       }else{
           console.log(false)
           return false;
       }
   }
   console.log(true)
   return true;
}
ransomNote("note", "nokteboo")
