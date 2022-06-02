const removeFromArray = function(array_x, ...args) {

    let a = array_x;
    let b = args;
    let c = a.filter(d => !b.includes(d));

    return c;
};

// Do not edit below this line
module.exports = removeFromArray;
