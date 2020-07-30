let num = [4, 5, 29,  54, 4, 0, -123, 666, -64, 1, -3, 6, -6,]
function bigles (param) {
return (`${Math.max(...param)} ; ${Math.min(...param)}`);
};
console.log(bigles(num));