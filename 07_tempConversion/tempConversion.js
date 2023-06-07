const convertToCelsius = function(farenheit) {
  return (farenheit - 32) * 5/9
};

const convertToFahrenheit = function(celcius) {
  return (celcius * 9/5) + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
