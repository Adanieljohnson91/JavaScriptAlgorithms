function ransomNote(ransomNote, magazine){
    let object1 = {};
    if(ransomNote === magazine)return true;
    if(ransomNote.length > magazine)return false;
    for(let i = 0; i < magazine.length; i++){
        let letter = magazine[i];
        object1[letter] ? object1[letter]+= 1 : object1[letter] = 1
        console.log(object1);
    }
    for(let i = 0; i < ransomNote.length; i++){
        console.log(object1[ransomNote[i]], "object at ransomNote")
        if(object1[ransomNote[i]]===undefined || object1[ransomNote[i]]===0){
            console.log(object1, false)
            return false;
        }
        if(object1[ransomNote[i]]){
                    console.log(object1, "decon")
                    object1[ransomNote[i]]--
                }
    }
    console.log(object1)
    return true;
}
ransomNote("aabbc", "bbcbbaaghe");

