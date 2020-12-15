function comparison(str1, str2) {
    
   let result = str1.toLowerCase() === str2.toLowerCase() ? true : false;
   return result;
};

console.log(comparison('string', 'StRiNg'))