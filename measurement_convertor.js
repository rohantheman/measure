//declare global variables
var unitInput = null;
var unitOutput = null;

//declare values to represent each measure of weight
var poundScalar, ounceScalar, stoneScalar, gramScalar, kilogramScalar, usTonScalar;

//express each unit of measure as a scalar value of a kilogram
poundScalar =  0.454;
ounceScalar = 0.028;
stoneScalar = 6.350;
gramScalar = 0.001;
kilogramScalar = 1;
usTonScalar = 907.185;

//get the input for input units
function getInputValue() {
  var numberValue = document.getElementById('text-input-value').value;
  unitInput = document.getElementById('unit-input').value;
  document.getElementById("input-display").innerHTML = "What unit of measure would you like to convert " + " " + numberValue + " " + unitInput + " ?";
}
//get the input for output units
function getOutputValue() {
  unitOutput = document.getElementById('unit-output').value;
  var numberValue = document.getElementById('text-input-value').value;
  var calculatedValue = convertValue(normalise(numberValue, unitInput), unitOutput);
  document.getElementById("output-display").innerHTML = numberValue + " " + unitInput + " is equal to " + calculatedValue + " " + unitOutput;
}

//convert the value input to a kilogram scalar
function normalise(input, givenUnitElementValue) {
  switch (givenUnitElementValue) {
    case "pounds":
      return input * poundScalar;

    case "ounces":
      return input * ounceScalar;

    case "stone":
      return input * stoneScalar;

    case "grams":
      return input * gramScalar;

    case "kilograms":
      return input * kilogramScalar;

    case "us-tons":
      return input * usTonScalar;

  }
}
//convert the calculated kilogram scalar to the final value
function convertValue(normalisedValue, requestedUnitElementValue) {
  switch (requestedUnitElementValue) {
    case "pounds":
      return normalisedValue / poundScalar;

    case "ounces":
      return normalisedValue / ounceScalar;

    case "stone":
      return normalisedValue / stoneScalar;

    case "grams":
      return normalisedValue / gramScalar;

    case "kilograms":
      return normalisedValue / kilogramScalar;

    case "us-tons":
      return normalisedValue / usTonScalar;

  }
}
