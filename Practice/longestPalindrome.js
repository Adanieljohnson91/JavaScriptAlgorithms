//taking in a string and tracking how long the longest subStringPalindrome is /what it is.
// function will take in a string we will iterate over the string setting \
// so a string like aaabbbaaba will return aabbbaa
function longestPalindrome(string){
    if(string.length <=1)return string;
    let largest = '';
    let current = '';
    let sMarker = 0;
    let eMarker = 0;
    for(let i = 0;i <string.length; i++){
        sMarker=i;
        eMarker=i; 
     slider(sMarker-1, eMarker+1) 
     slider(sMarker -1, eMarker) 
    }
    function slider(start, end){
        if(string[start]===string[end]&& end < string.length){
            current = string.slice(start, end+1);
            sMarker--
            eMarker++
            if(largest.length < current.length) {
                largest = current
            };
            slider(sMarker, eMarker)  
    } else{
        return;
    }
}
console.log(largest)
    return largest
}
longestPalindrome("racecarlevelevel")

function longPali(s){
   let longest="";
    for(let i = 0; i <s.length ; i ++){
       let current = "";
        for(let j = i; j < s.length; j++){
            current+=s[j]
            if(isPalindrome(current) === true && current.length > longest.length){
              
                longest = current
            }
        }
    }
    function isPalindrome(string){
        let lIndex = 0;
        let rIndex = string.length -1;
        while(lIndex<rIndex){
            if(string[lIndex] !== string[rIndex])return false;
                lIndex++
                rIndex--;
        }
         return true 
    }
    console.log(longest)
    return longest;
}
//longPali("racecar");

function longestPalindromeSubstring(string){
    let current = [0,1];
    for(let i=0; i < string.length; i++){
        const odd = getLongestPalindrome(string, i -1, i+1);
        const even = getLongestPalindrome(string, i-1, i);
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
        current = current[1] - current[0] > longest[1] - longest[0]? current: longest;
        if(string.slice(current[0], current[1]) ===string.length) return string.slice(current[0], current[1]);
    }
    return string.slice(current[0], current[1]);
}
function getLongestPalindrome(string, leftIndex, rightIndex){
    while(leftIndex >=0 && rightIndex < string.length){
        if(string[leftIndex] !== string[rightIndex])break;
        leftIndex--
        rightIndex++
    }
    return [leftIndex+1, rightIndex]
}
//longestPalindromeSubstring("aaaa");