let str = "redevCourses"
let solution = (param) => param.split('').map(item=>item == item.toUpperCase() ?   '_' + item.toLowerCase() : item ).join('');
console.log(solution(str));
// function format(param) {
//     function upper (match) {
//       return '_' + match.toLowerCase();
//     }
//     return param.replace(/[A-Z]/g, upper);
//   }
//   console.log(format(str))