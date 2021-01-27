



let str = 'abc def ghi jkl mno pqr stu';

String.prototype.go= function(start) {
    return this.startsWith(start)
};

console.log(str.go('abc'))