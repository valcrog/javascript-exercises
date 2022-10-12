const reverseString = function(string) {
    let array = [];
    for (char of string) {
        array.push(char);
    }
    array = array.reverse();
    let result = "";
    for (char of array) {
        result += char;
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
