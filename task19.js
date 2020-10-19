let cats = [[0,1,"^^"],[9,"^^",2],["^^",8,7]];
countCats = (params) => params.join()
                        .split(',')
                        .filter(item => item === "^^"? item : 0)
                        .length;
console.log(countCats(cats));