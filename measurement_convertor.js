var unitInput = null;
var unitOutput = null;
var pounds, ounces, stone, grams, kilograms, us_ton;
//express each unit of measure as a scalar value of a kilogram
pounds =  0.454;
ounces = 0.028;
stones = 6.350;
grams = 0.001;
kilograms = 1;
us_tons = 907.185;

function getInputValue() {
  unitInput = document.getElementById('unit-input').value;
  var numberValue = document.getElementById('text-input-value').value;
  document.getElementById("input-display").innerHTML = "What unit of measure would you like to convert " + " " + numberValue + " " + unitInput + " ?";
}

function getOutputValue() {
  unitOutput = document.getElementById('unit-output').value;
  var numberValue = document.getElementById('text-input-value').value;
  document.getElementById("output-display").innerHTML = numberValue + " " + unitInput + " is equal to ____ " + unitOutput;
  alert(calculate());
}

function calculate(){
  return unitOutput;
}
