let vegetables = ['Капуста', 'Репа', 'Редиска'];

function arrayClone(arr) {
   let  newArray = arr.slice();
   return newArray;
}

console.log(arrayClone(vegetables))