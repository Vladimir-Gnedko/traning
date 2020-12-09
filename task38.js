let array1 = [1, 2, 3, 4, 5];

let array2 = [4, 5, 6];

function func(arr1,arr2){
    let sum = 0;
    arr1.push(...arr2)
    for(var i = 0; i < arr1.length; i++){
        sum += arr1[i];
        }
    return sum;
}

console.log(func(array1,array2))