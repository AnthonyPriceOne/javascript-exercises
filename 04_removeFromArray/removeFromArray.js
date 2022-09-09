const removeFromArray = function(array, ...args) {
    const sprArray = args;
    return array.filter(item => !sprArray.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
