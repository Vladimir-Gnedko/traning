let countCats = [[0,1,"^^"],[9,"^^",2],["^^",8,7]];
cats = (params) => params.join().split(',').filter(item => item === "^^"? item : 0).length
console.log(cats(countCats))