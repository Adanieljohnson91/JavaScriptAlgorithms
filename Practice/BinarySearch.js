function binarySearch(array, val){
    let start = 0;
    let end = array.length -1;
    let mid = Math.floor((start +end)/2);
    while(array[mid]!== val && start <end){
        if(array[mid]>val){
            end = mid -1
            //close left
        }else if(array[mid]<val){
            start = mid+1
            //close right
        }
       mid = Math.floor((start +end)/2)
    }
    let bool = array[mid] === val;
    console.log(bool, mid);
    return bool
}
binarySearch(["this", "is", "a", "string"], "string")