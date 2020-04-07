/*
Write a function that accepts a string. The function should capitalize 
the first letter of each word in the string then return the capitalized string.
Example capitalize('a short sentence') --> 'A Short Sentence'

*/
function upperCase(str) {
  let array = str.split(" ");
  let word = [];
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (count <= 0) {
      console.log(array[i].charAt(0).toUpperCase());
      console.log(array[i].slice(1));
      word.push(array[i].charAt(0).toUpperCase() + array[i].slice(1));
      count++;
    } else {
      word.push(array[i]);
    }
  }
  return word.join(" ");
}
//console.log(upperCase("this is a .sentence"))

// linear search
function linearSearch(arr, num) {
  if (arr.includes(num) === true) {
    return arr.indexOf(num);
  } else {
    return -1;
  }
} 
// binary search takes in an array and a
// taking in an array and a strue
function binarySearch(arr, str) {
  let start = 0,
   end = arr.length - 1,
   mid = Math.floor((start + end) / 2);
  while (arr[mid] !== str && start < end) {
    if (arr[mid] > str) {
      end = mid - 1;
    } else if(arr[mid] < str) {
      start = mid + 1;
    }
    mid = Math.floor((start + end) / 2);
  } 
  return (arr[mid].toLowerCase() != str.toLowerCase()) ? -1 : mid;
}

const delta = binarySearch(["Alpha", "Beta","Gamma", "Omega", "Zeta"], "Gamma");
console.log(delta); 

//Binary Search for words
// function binaryWordSearch(array, str){
//   //create a start and end point
//   let arr = []
//   array.forEach(word=>arr.push(word.toLowerCase()))
//   let start = arr[0]
//   let end = arr[arr.length - 1]
//   let mid = arr[Math.floor(arr.indexOf(start) + arr.indexOf(end) / 2)]
  
//   if(mid !== str.toLowerCase()){
    
//   return;
//   } else{
//   console.log(mid)
//   }
// }
// binaryWordSearch(["Alpha", "beta","Gamma", "omega", "Zeta"], "Gamma")


//WORKINGF
function binarySearchWord(items, value){
  var startIndex  = 0,
      stopIndex   = items.length - 1,
      middle      = Math.floor((stopIndex + startIndex)/2);

  while(items[middle] != value && startIndex < stopIndex){

      //adjust search area
      if (value < items[middle]){
          stopIndex = middle - 1;
      } else if (value > items[middle]){
          startIndex = middle + 1;
      }

      //recalculate middle
      middle = Math.floor((stopIndex + startIndex)/2);
  }

  //make sure it's the right value
  return (items[middle].toLowerCase() != value.toLowerCase()) ? -1 : middle;
}
const gamma = binarySearchWord(["Alpha", "beta","gamma", "omega", "Zeta"], "Gamma");
//console.log(gamma);
//console.log("gan">="gam")
/*
Given a string, return a new string with the reversed
order of characters
--- Examples
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'
*/
//split reverse join
