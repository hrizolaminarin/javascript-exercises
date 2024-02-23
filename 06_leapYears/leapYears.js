const leapYears = function(year) {
    // Leap years are years divisible by four (like 1984 and 2004). 
    // However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are divisible by 400 
    // (like 1600 and 2000, which were in fact leap years). 

    if ( isNotNumber(year) ) return "ERROR";
    
    return isDevisibleBy( year, 4 ) && ( notDevisibleBy( year, 100) || isDevisibleBy( year, 400)) ;
};

const isNumber = function(value) {
    return typeof value === "number";
}

const isNotNumber = function(value) {
    return !isNumber(value);
}

const isDevisibleBy = function (value, by) {
    return  value % by === 0;
}

const notDevisibleBy = function (value, by) {
    return Boolean(value % by) ;
}

// Do not edit below this line
module.exports = leapYears;
// console.log(notDevisibleBy(9,4));