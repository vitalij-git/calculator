"use strict"

var outputResult = document.querySelector("#calculator-result");
var numberArray = [];
var value = 0;
var checker = "";

document.querySelector(".button1").addEventListener("click", function () {
    value = document.querySelector(".button1").value;
    numberArray.push(value);
    outputResult.value += numberArray;
});
document.querySelector(".button2").addEventListener("click", function () {
    value = document.querySelector(".button2").value;
    outputResult.value += value;
});
document.querySelector(".button3").addEventListener("click", function () {
    value = document.querySelector(".button3").value;
    outputResult.value += value;
});
document.querySelector(".sum").addEventListener("click", function () {
    checker = outputResult.value;
    if (checker.length == 0) {
       
    }
    else {
        if (checker.indexOf("+") > -1 || checker.indexOf("-") > -1 || checker.indexOf("/") > -1 || checker.indexOf("*") > -1) {
            
        }
        else {
            value = document.querySelector(".sum").value;
            outputResult.value += value;
        }
    }
});
document.querySelector(".button4").addEventListener("click", function () {
    value = document.querySelector(".button4").value;
    outputResult.value += value;
});
document.querySelector(".button5").addEventListener("click", function () {
    value = document.querySelector(".button5").value;
    outputResult.value += value;
});
document.querySelector(".button6").addEventListener("click", function () {
    value = document.querySelector(".button6").value;
    outputResult.value += value;
});
document.querySelector(".substract").addEventListener("click", function () {
    checker = outputResult.value;
    if (checker.length == 0) {
       
    }
    else {
        if (checker.indexOf("+",) > -1 || checker.indexOf("-",) > -1 || checker.indexOf("/",) > -1 || checker.indexOf("*",) > -1) {
            
        }
        else {
            value = document.querySelector(".substract").value;
            outputResult.value += value;
        }
    }
});
document.querySelector(".button7").addEventListener("click", function () {
    value = document.querySelector(".button7").value;
    outputResult.value += value;
});
document.querySelector(".button8").addEventListener("click", function () {
    value = document.querySelector(".button8").value;
    outputResult.value += value;
});
document.querySelector(".button9").addEventListener("click", function () {
    value = document.querySelector(".button9").value;
    outputResult.value += value;
});
document.querySelector(".division").addEventListener("click", function () {
    checker = outputResult.value;
    if (checker.length == 0) {
        
    }
    else {
        if (checker.indexOf("+") > -1 || checker.indexOf("-") > -1 || checker.indexOf("/") > -1 || checker.indexOf("*") > -1) {
            
        }
        else {
            value = document.querySelector(".division").value;
            outputResult.value += value;
        }
    }

});
document.querySelector(".button0").addEventListener("click", function () {
    value = document.querySelector(".button0").value;
    outputResult.value += value;
});
document.querySelector(".point").addEventListener("click", function () {
    checker = outputResult.value;
    if (checker.length == 0) {
       
    }
    else {
            value = document.querySelector(".point").value;
            outputResult.value += value;
    }
});
document.querySelector(".multiply").addEventListener("click", function () {
    checker = outputResult.value;
    if (checker.length == 0) {
       
    }
    else {
        if (checker.indexOf("+") > -1 || checker.indexOf("-") > -1 || checker.indexOf("/") > -1 || checker.indexOf("*") > -1) {
           
        }
        else {
            value = document.querySelector(".multiply").value;
            outputResult.value += value;
        }
    }
});
document.querySelector(".all-clear").addEventListener("click", function () {
    outputResult.value = "";
});
document.querySelector(".clear").addEventListener("click", function () {
    outputResult.value = outputResult.value.slice(0, -1);
});
