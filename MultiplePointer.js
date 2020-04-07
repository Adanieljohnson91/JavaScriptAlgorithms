function sumZero(arr){
    for(let i = 0; i <arr.length; i++){
        console.log(i)
        for(let j = i; j <arr.length; j++){
            console.log(j)
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]]
            }
        }
    }
}
console.log(sumZero([-3,-2,-1,0,2,3,4]))
function sumZero2(arr){

}