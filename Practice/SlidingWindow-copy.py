def maxSum(arr, n, k): 
      
    # Initialize result 
    max_sum = INT_MIN ; 
  
    # Consider all blocks  
    # starting with i. 
    for i in range(n - k + 1): 
        current_sum = 0; 
        
        for j in range(k): 
            current_sum = current_sum + arr[i + j]; 
   
        # Update result if required. 
        max_sum = max(current_sum, max_sum ); 
  
    return max_sum; 
    // the window represents the current section of string/array you are looking at
    //at the very least it will require two pointers begginning and end and need to keep track of the previous greatest value
    //once you know what variables you want to store, you need to think "When do i grow this window and when do i shrink it";
    //slow pointer moves up until you no longer have a valid substring
    //4 types of Sliding Windows, Fast/Slow, Fast/Catchup Fast/Log Front/Back