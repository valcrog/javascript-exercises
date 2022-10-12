const removeFromArray = function(array, ...elements) {
    for (element of elements) {
        for (let i = array.length-1;i>=0;i--) {
            if (array[i] === element) {
                array.splice(i, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
