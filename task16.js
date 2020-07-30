let str = 'This is an example!';
let ret = (param) => param.split('').reverse().join('').split(' ').reverse().join(' ');
console.log(ret(str));