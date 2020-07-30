let num = [12,423,54,1235,3,15,2];
let sum = (param) => param.sort((a,b)=>a-b).slice(0,2).reduce((a,b)=>a+b)
console.log(sum(num))

