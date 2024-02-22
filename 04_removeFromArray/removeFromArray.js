const removeFromArray = function() {

    // argument is Array-like object so we create array from it
    const args = Array.from(arguments);

    // since we have array we can apply array function to it:
    // shift() removes the first element from the array and returns that same element
    // which is actually the array from which we want to remove item
    const array = args.shift();
    
    return array.filter( item => !args.includes(item) );
}

// Do not edit below this line
module.exports = removeFromArray;