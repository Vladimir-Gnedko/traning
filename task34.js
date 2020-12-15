let str = "Каждый охотник желает знать";
let str1 = "скрипт";
let str2 = "знать";

String.prototype.endsWith = function(substring) {
    let arr = this.split(' ');
    if (arr[arr.length - 1] === substring) {
    return true
        } else {
        return false
}
};

console.log(str.endsWith(str1))

console.log(str.endsWith(str2))