let str="Пример строки";

function capitalizeFirstLetter(str) {
    return str.charAt(0).toLowerCase()+str.slice(1)
};

console.log(capitalizeFirstLetter(str))