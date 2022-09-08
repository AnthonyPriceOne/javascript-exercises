const repeatString = function(str, times) {
    let sumStr = '';
    if (times > 0) {
        for (let i = 0; i < times; i++) {
            sumStr += str;
        }
    return sumStr;
    }
    if (times === 0) {
        return '';
    }
    if (times < 0) {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = repeatString;
