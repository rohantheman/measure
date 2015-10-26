document.getElementById("convertButton").addEventListener("click", convertFunction);
//document.getElementById("choice").addEventListener("click", getSelectedOption());

function getSelectedOption()
{
    var radios = document.getElementsByName('conversionType');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            //alert(radios[i].value);
            if (radios[i].value == "Weight") {
                weightConvertor.style.display = "";
                convertControl.style.display = "";
            }
            if (radios[i].value == "Length") {
                lengthConvertor.style.display = "";
                convertControl.style.display = "";
            }
            if (radios[i].value == "Area") {
                areaConvertor.style.display = "";
                convertControl.style.display = "";
            }
            if (radios[i].value == "Volume") {
                volumeConvertor.style.display = "";
                convertControl.style.display = "";
            }
            //exit once match has been made
            break;
        }
    }
}

function convertFunction()
{
    getSelectedRadioButton();
}

function getSelectedRadioButton()
{
    var radios = document.getElementsByName('tempUnits');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            // alert(radios[i].value);
            if (radios[i].value == "Celcius") {
                celciusToFahrenheit();
            } else {
                fahrenheitToCelcius();
            }
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }
}

function celciusToFahrenheit()
{
    var inputValue = document.getElementById("input").value;
    var resultValue = inputValue * 9 / 5 + 32;
    //document.getElementById("result").value = resultValue;
    document.getElementById("output").innerHTML = "The result is: " + resultValue;
}

function fahrenheitToCelcius()
{
    var inputValue = document.getElementById("input").value;
    var resultValue = (inputValue - 32) * 5 / 9;
    //document.getElementById("result").value = resultValue;
    document.getElementById("output").innerHTML = "The result is: " + resultValue;
}
