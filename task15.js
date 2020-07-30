let str = 'is2 Thi1s T4est 3a'
let sort = (param) => param.split(' ').
sort((a,b)=> a.split('').filter(item=>parseInt(item))- b.split('').filter(item=>parseInt(item)))
.join(' ');
console.log(sort(str))  