//Bubble Sort-
//Sorting needs to be understood to understand which methods will best fit the required task
//Generally Bubble Sort is not optimal and doesnt have many usecases 
const arr = [6,4,10,15, 2, 34, 189, 22, 8, 38]
function bubbleSort(arr){
    for(let i = arr.length; i>0; i--){
        for(let j = 0; j< i - 1; j++){
            if(arr[j]>arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
}
bubbleSort(arr);




//swap function
function swap(arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}
function swap2015(arr, idx1, idx2){
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}



//Built in sort() method
// built in sort method accepts an optional comparator, the comparator function tells 
//javascript how you want to sort
// javascript looks at the pair of elements and determines their sort order based on the return value

//const arrP = console.log(arr.sort((a,b)=> a-b))
/*
sort expects a comparator
sort((a,b)=>{
    return a-b
    //if negative, a come first if positive b comes first so 4-10 = -6, 4 comes before 10, 
 
})
*/
//arrP;