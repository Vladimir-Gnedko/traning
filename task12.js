let arrayDiff = (arr1, arr2) => arr1.filter(item => !arr2.join('').includes(item));
console.log(arrayDiff([1,2],[1]));