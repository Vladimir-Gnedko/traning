String.prototype.toJadenCase = function toJadenCase (param) {
    let str1 = param.split(' ').map(item => item[0].toUpperCase() + item.substring(1,item.length) ).join(' ');
} 
console.log (); 