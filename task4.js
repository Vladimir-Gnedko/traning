let str = "abcd"
let str1 = "RqaEzty"
let str2 = "cwAt"
// function accum (params) {
//     return params
//     .split("") 
//     .map((item, index)=>item.toUpperCase() +
//     item.toLowerCase().repeat(index))
//     .join("-");
// } 
let accum = (params) =>  params.split('')
    .map((item, index)=>item.toUpperCase() + 
    item.toLowerCase()
    .repeat(index))
    .join("-");
console.log(accum(str))