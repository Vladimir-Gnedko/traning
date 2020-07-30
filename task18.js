let str = 'шалаш';
let revers = (param) => param ==  param.split('')
                                       .reverse()
                                       .join('') ? `${param + '=палиндром'}`:  `${param + '=не палиндром'}`;

console.log(revers(str));