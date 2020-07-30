let pass = '4EEE444' ;
function chekPin (params) {
    
    if (params.length===4 || params.length===6 && !isNaN(params)) {
        return true 
    } else {
       return false
    };

};
console.log(chekPin(pass));
