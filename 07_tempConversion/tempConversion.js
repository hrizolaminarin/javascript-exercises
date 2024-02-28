const convertToCelsius = function(value) {
  
  if (isNotNumber(value)) return "ERROR";
  
  return Number.parseFloat( ((value - 32) * 5/9).toFixed(1) );
};

const convertToFahrenheit = function(value) {

  if (isNotNumber(value)) return "ERROR";
  
  return Number.parseFloat( (value * 9/5 + 32).toFixed(1) );
};

const isNumber = function(value) {
  return typeof value === "number";
}

const isNotNumber = function(value) {
  return !isNumber(value);
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
