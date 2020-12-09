let arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

const expand = (params) => params.flat(Infinity);
console.log(expand(arr2));

// function expand (params) {
//     return params.flat(Infinity)
// }
// console.log(expand(arr2))