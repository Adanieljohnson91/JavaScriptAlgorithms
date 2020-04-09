function slidingWindow(arr, num){
    let max = 0;
    let tempSum = 0;
    if(arr.length < num) return null;
        for(let i = 0; i < num; i++){
            max += arr[i]
        }
        tempSum = max;
        for(let i = num; i <arr.length; i++){
            tempSum = tempSum - arr[i - num] + arr[i];
            max = Math.max(max, tempSum);
        }
        console.log(max,"hit", tempSum)
        return;
    
}

slidingWindow([2,6,9,2,1,8,5,6,3], 3);