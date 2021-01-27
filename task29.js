function unique_letters(str) {
    return String(str.split('').filter((a,b,str) => str.lastIndexOf(a) === str.indexOf(a)))
};

console.log(unique_letters('anaconda'))