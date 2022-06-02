const leapYears = function(x) {

    let testYear = x 

    if (testYear % 4 == 0 && testYear % 100 != 0 ) {

        return true 
    }else if (testYear % 4 == 0 && testYear % 100 == 0 && testYear % 400 == 0 ) {

        return true
    }else {
        return false
    }



};

// Do not edit below this line
module.exports = leapYears;
