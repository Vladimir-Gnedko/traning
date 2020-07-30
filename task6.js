let str = 'dpogdaaaabbfklvnzzzqmlotyurnmcjertuyhd'
function chek (param) {
  let count =0;
  let newStr = param.split('');
    for ( i = 0; i < param.length; i++ ) {
      if (!(newStr[i]>='a' && newStr[i]<='m')) {
        count++;
      } 
    } return `${count} / ${newStr.length}`;
};  

     console.log(chek(str)); 