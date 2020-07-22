let object = {
    "a":1,
    "b":2,
    "c":3,
    "d":4
};
let object2 = {}
let object3={}
for(key in object){
        object2[Number(object[key])] = key;
     if(object[key] % 2 === 0){
         console.log("even", key)
     } else {
        console.log("odd", key)
     }
        for(key in object2){
            object3[object2[key]] = key;
        }
}
console.log(object);
console.log(object2);
console.log(object3);

