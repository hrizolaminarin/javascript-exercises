const repeatString = function(str, numOfTimes) { 
    
    if ( numOfTimes < 0 ) {
        return "ERROR";
    }

    let result = ""; 
    for( let i = 0; i < numOfTimes; i++) {
        result += str;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;