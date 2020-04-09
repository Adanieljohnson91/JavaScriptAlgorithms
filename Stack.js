//Stack is like a stack of books, you can push thinks on top of the stack and pop the object off the top peek to display and length to see lenght
//array stack for palindrome

var letters = []// this is the stack

let word = "racecar";

let rword = "";

//put letters of the word into the stack
for(let i =0; i < word.length; i++){
    letters.push(word[i]);
}

for(let i = 0; i<word.length; i++){
    rword += letters.pop();
}
if(rword === word){
    console.log(word + " is a palindrome.")
} else{
    console.log(word + " is not a palindrome")
}