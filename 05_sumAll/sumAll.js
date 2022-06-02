const sumAll = function(x,y) {

    let initialNumber = x;
    let lastNumber = y;
    let total = 0;


    if (x < 0 || y < 0 || (typeof x) != "number" || (typeof y) != "number"   ) {

        return "ERROR"

    } else if (lastNumber > initialNumber) {

        for (let i = initialNumber; i <= lastNumber; i++ ) {

            total = total + i ;
        }

        return total

    } else if (lastNumber < initialNumber) {

        let initialNumber = y;
        let lastNumber = x;

        for (let i = initialNumber; i <= lastNumber; i++ ) {

            total = total + i ;
        }

        return total

    }
    
};

// Do not edit below this line
module.exports = sumAll;
