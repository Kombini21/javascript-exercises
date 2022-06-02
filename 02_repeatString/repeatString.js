const repeatString = function(x_string, y_number) {


    if (y_number < 0) {
        
        return "ERROR"
    } else {
        const lista = [];

        for (let i = 0; i < (y_number); i++)
        {
            lista.push(x_string)
        }

        let joinedLista = lista.join("")

        return joinedLista
    }

};

// Do not edit below this line
module.exports = repeatString;
