let array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

function often (param) {
    let start = 1;
    let count = 0; 
    for(let i=0; i<param.length; i++){
        for(let g=0; g< param.length; g++){
            if(param[i] === param[g]) count++;
            if(start<count){
                start = count;
            }
    }
    count =0;
}
    return `${'максимальное повторение ' + start + ' раз'}`;
}
console.log(often(array));

