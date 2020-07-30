let str = ["bla","wekmvever","needle","bntyn","qwd","qfverv","rtbrtb"];
let findNeedle = (param) => `${'нашел иглу в положении'}  ${param.indexOf('needle')}`;
// {
//   let str2 =  param.indexOf("needle");
//  return `${'нашел иглу в положении'}  ${str2}`;
// };

console.log(findNeedle(str));