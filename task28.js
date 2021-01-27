let str = "вишня, груша, слива, груша";

function removeDuplicate(str) {
    return Array.from (new Set(str.split(','))).join('')


}
console.log(removeDuplicate(str))