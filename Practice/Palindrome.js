//create a function that tells if string is a palindrom or now.
function palindromeString(string) {
  let start = 0;
  let end = string.length - 1;
  while (start <= end) {
    if (string[start] === string[end]) {
      console.log(start, end);
      start++;
      end--;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}
//palindromeString("racccar")
//Numbers and Letters
function palindrome(num) {
  let number = String(num);
  let start = 0;
  let end = number.length - 1;
  while (start < end) {
    if (number[start] === number[end]) {
      start++;
      end--;
    } else {
      console.log("Is NOT a Palindrome");
     return false;
    }
  }
  console.log("Is a Palindrome");
  return true;
}
palindrome(626)
//simple solution
function reversed(x) {
  let string = String(x);
  let res = string === string.split("").reverse().join("") ? true : false;
  console.log(res)
  return res;
}
//reversed(626);
