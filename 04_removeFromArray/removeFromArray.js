const removeFromArray = function() {
    let array = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        if ( array.includes( arguments[i] ) ) {
            array = array.filter( item => {
                return item != arguments[i];
            });
        }
    }

    return array;
}

// Do not edit below this line
module.exports = removeFromArray;