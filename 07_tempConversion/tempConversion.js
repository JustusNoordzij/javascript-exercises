const ftoc = function(temp) {
  celsius = (temp - 32) * (5/9);
  return rounded = Math.round(celsius * 10) / 10;
  

};

const ctof = function(temp) {
  fahrenheit = (temp * (9/5) + 32);
  return rounded = Math.round(fahrenheit * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
