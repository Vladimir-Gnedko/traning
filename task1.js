find = (param) => Math.sqrt(param) % 1 ? -1 : (Math.sqrt(param) + 1) ** 2;
console.log(find(121));