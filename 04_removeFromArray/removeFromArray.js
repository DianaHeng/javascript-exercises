const removeFromArray = function(arr, elem) {
    let index = arr.indexOf(elem);
    if (index > -1) {
        arr.splice(index, 1)
    }
    return arr
    
};

// Do not edit below this line
module.exports = removeFromArray;
