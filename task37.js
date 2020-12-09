let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];

function removeDuplicates(params) {
    
    for(let i=0; i<params.length; i++){
        for(let g=0; g< params.length; g++){
            if(params[i] === params[g]) params.splice([i], 1);
            
         }
    }
    return params;
}
console.log(removeDuplicates(arr));