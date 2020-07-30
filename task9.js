let str = 'pogoda prosto zaebis segodnya bl';
let transform = (param) => param.split(' ')
                    // .map(item => item.length)
                    .sort((a,b)=> a.length-b.length)
                    .shift().length;


console.log(transform(str));