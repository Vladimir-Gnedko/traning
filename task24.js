function isUpperCase(str, character) {
    return str.charAt(character).toUpperCase() === str.charAt(character);
};

console.log(isUpperCase('tasks JavaScript', 6));