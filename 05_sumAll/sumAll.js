const sumAll = function(...args) {
    const checkNum = args.every((ele) => {
        return Number.isInteger(ele) && ele > 0;
    });
    if (checkNum === true) {
        const justNumbers = args.sort();
        let sumNumbers = 0;
        for (let i = justNumbers[0]; i <= justNumbers[1]; i++) {
        sumNumbers += i;
    }
    return sumNumbers;
    }
   return "ERROR"; 
};

// Do not edit below this line
module.exports = sumAll;
