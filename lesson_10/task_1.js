function getSolution(arr, num) {
    let res = [],
        i = 0, 
        copyArr,
        solution;
        res.push(arr[0]);

    while ( i<arr.length) {
        copyArr = [...res];
        res.length = 0;//delete array

        for (j=0; j<copyArr.length; j++) {
            res.push(copyArr[j] + arr[i+1]);
            res.push(copyArr[j] - arr[i+1]);
        }
        
        i++;
    }
    copyArr.includes(num) ? solution = true : solution = false;
    
    return solution;
}

console.log('solution = ', getSolution([1,3,4,6,8], -2));
console.log('solution = ', getSolution([15,2,3], 10));
console.log('solution = ', getSolution([1,5,3,2,5], -2));