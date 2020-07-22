var lengthOfLongestSubstring = (string) => {
    if (string.length === 0) return 0;
    if (string.length === 1) return 1;
    if(string[0] === string[1])return 2;
    let counter = 1;
    let largest = 0
    let obj = {};
    for (let i = 0; i <= string.length; i++) {
        obj = {}
         counter = 0
        for (let j = i+1; j <= string.length; j++) {
            if (obj[string[j]] !== undefined) {
                if (largest < counter) {
                largest = counter
                
            }
            } else {
                obj[string[j]] = true
                counter++
            }
           
        }
    }
    console.log(largest)
            return largest
}
lengthOfLongestSubstring('pwwkew')