function findPairWithSum(arr, targetSum) {
    const numMap = new Map();
    for (const num of arr) {
        const complement = targetSum - num;
        
        if (numMap.has(complement)) {
            return [complement, num];
        }
        numMap.set(num, true);
    }
    return null;
}

console.log(findPairWithSum([1,2,3,1,4],5))
