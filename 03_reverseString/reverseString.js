const reverseString = function(x_string) {

    var splitString = x_string.split("");

    var reverseArray = splitString.reverse();

    var joinArray = reverseArray.join("")

    return joinArray


};

// Do not edit below this line
module.exports = reverseString;
