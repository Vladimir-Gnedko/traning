let num = 5;
function factorial (params) {
    return (params != 1) ? params * factorial(params -1) : 1 ;
}
console.log(factorial(num));