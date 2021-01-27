let str = " Pasha is a good boy "

function strip(str) {
   return str.replace(/\s+/g,' ')
             .replace(/^\s/,'')
             .replace(/\s$/,'');
};

console.log(strip(str))
