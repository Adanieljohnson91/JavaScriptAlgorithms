//create a function that returns the count of letters from a string
//"aabbccd"
//[a:2,b:2:c:2,d:1]

function countOfString(string){
    let object = {};
    let array = []
    for(let i = 0; i < string.length; i++){
        object[string[i]] !== undefined ? object[string[i]]++ : object[string[i]] = 1
    }
     for(let key in object){
         array.push({[key]:object[key]})
     }
console.log(array);
    return 
}
countOfString("aabb")