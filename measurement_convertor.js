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

//get the input for each
function getInputValue() {
  var numberValue = document.getElementById('text-input-value').value;
   unitInput = document.getElementById('unit-input').value;
  document.getElementById("input-display").innerHTML = "What unit of measure would you like to convert " + " " + numberValue + " " + unitInput + " ?";
}

function getOutputValue() {
  unitOutput = document.getElementById('unit-output').value;
 var numberValue = document.getElementById('text-input-value').value;
 var calculatedValue = convertValue(normalise(numberValue,unitInput),unitOutput);
 alert(numberValue);
  alert(unitInput);
  alert(unitOutput);
 alert(normalise(numberValue,unitInput));
 alert(convertValue(normalise(numberValue,unitInput),unitOutput));
 document.getElementById("output-display").innerHTML = numberValue + " " + unitInput + " is equal to "+ calculatedValue + unitOutput;
}

function normalise(input,givenUnitElementValue){
  
  switch(givenUnitElementValue){
  case "pounds":
  return input * poundScalar;
  break;
  case "ounces":
  return input * ounceScalar;
  break;
  case "stones":
  return input * stoneScalar;
  break;
  case "grams":
  return input *gramScalar;
  break;
   case "kilograms":
  return input * kilogramScalar;
  break;
     case "us-tons":
  return input * usTonScalar;
  break;
  }
}

function convertValue(normalisedValue,requestedUnitElementValue){
   switch(requestedUnitElementValue){
  case "pounds":
  return normalisedValue / poundScalar;
  break;
  case "ounces":
  return normalisedValue / ounceScalar;
  break;
  case "stones":
  return normalisedValue / stoneScalar;
  break;
  case "grams":
  return normalisedValue / gramScalar;
  break;
   case "kilograms":
  return normalisedValue / kilogramScalar;
  break;
     case "us-tons":
  return normalisedValue / usTonScalar;
  break;
  }
}
