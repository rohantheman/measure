//declare global variables
var unitInput = null;
var unitOutput = null;

//declare values to represent each measure of weight
var poundScalar, ounceScalar, stoneScalar, gramScalar, kilogramScalar, usTonScalar;

//express each unit of measure as a scalar value of a kilogram
poundScalar =  0.453592;
ounceScalar = 0.0283495;
stoneScalar = 6.35029;
gramScalar = 0.001;
kilogramScalar = 1;
usTonScalar = 907.185;

//get the input values for input units
function getInputValue() {
  var numberValue = document.getElementById('text-input-value').value;
   try {
        if(numberValue == "") throw "The field is empty!";
        if(isNaN(numberValue)) throw "not a number";
         numberValue = Number(numberValue);
    }
    catch(err) {
       alert(err) ;
    }
  unitInput = document.getElementById('unit-input').value;
  document.getElementById("input-display").innerHTML = "Pleasee choose the unit of measure to which you would like to convert " + " " + numberValue + " " + unitInput + " =>";
}

//get the input for output units
function getOutputValue() {
  //window.location.reload();
  unitOutput = document.getElementById('unit-output').value;
  var numberValue = document.getElementById('text-input-value').value;
 //Check if value for unitInput is null
  if(unitInput != null){
     //calculate and display values to web page
    var calculatedValue = convertValue(normalise(numberValue, unitInput), unitOutput).toFixed(3);
  document.getElementById("output-display").innerHTML = numberValue + " " + unitInput + " is equal to " + calculatedValue + " " + unitOutput;
  }else {
   //alert("You must select a unit of measure for the value that you would like to convert!");
    document.getElementById("message").innerHTML = "You must select a unit of measure for the value that you would like to convert!";
    document.getElementById("message-area").style.display = "block";

}

}

//convert the value input to a kilogram scalar
function normalise(input, givenUnitElementValue) {
    //check the value selected in the checkbox and return the appropriate value
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

function clearDisplay(){
  window.location.reload();
}

//convert the calculated kilogram scalar to the final value
function convertValue(normalisedValue, requestedUnitElementValue) {
  //check the value selected in the checkbox and invoke the appropriate function
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
