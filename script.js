function divide(arr, n) {
    const result = [];
    let tempSubarray = [];
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // If adding arr[i] would exceed n, finalize the current subarray
        if (currentSum + arr[i] > n) {
            result.push(tempSubarray);
            tempSubarray = [];
            currentSum = 0;
        }
        
        // Add the current element to the subarray and update currentSum
        tempSubarray.push(arr[i]);
        currentSum += arr[i];
    }
    
    // Add the last subarray if it's not empty
    if (tempSubarray.length > 0) {
        result.push(tempSubarray);
    }

    return result;
}

// Test cases
console.log(divide([1, 2, 3, 4, 1, 0, 2, 2], 5)); // Expected output: [[1, 2], [3], [4, 1, 0], [2, 2]]
console.log(divide([4, 3, 2, 1], 4));            // Expected output: [[4], [3], [2, 1]]
