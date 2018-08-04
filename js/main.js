//Pixel to Em logic
function pixelToEm () {
  var baseValue = 16;
  var pixelValue = document.getElementById("pixelInput").value;
  var result = pixelValue/baseValue;
  return result;
}

//Pixel to Em UI
function showEmResult () {
  var pixeled = pixelToEm();
  var emResult = document.getElementById("emResult");
  emResult.innerHTML = pixeled;
}


//em to pixel logic
function conEmToPx () {
  var emInput = document.getElementById("emInput").value;
  var emPxResult = emInput * 16;

  return emPxResult;
}

//em to pixel ui
function showPxResult () {
  var emPixel = conEmToPx();
  var pxResult = document.getElementById("pxResult").innerHTML = emPixel;
}


//********** Temperature ****************
function celToFahLogic () {
  var celBaseValue = 32;
  var celValue = document.getElementById("celsius").value;

  return celValue * 1.8 + 32;
}

function celToFahUi () {
  var celToFahed = celToFahLogic();
  var celToFahResult = document.getElementById("celToFahResult");

  celToFahResult.innerHTML = celToFahed;
}


function fahToCelLogic () {
  var fahValue = document.getElementById("fahrenheit").value;
  var fahToCelResult = Math.round((fahValue - 32) * 5 / 9);

  return fahToCelResult;
}

function fahToCelUi () {
  var fahToCeled = fahToCelLogic();
  var fahCelResult = document.getElementById("fahCelResult");

  fahCelResult.innerHTML = fahToCeled;

}

//************ Anagram Finder ****************
function anagramLogic (a,b) {
  var firstWord = document.getElementById("firstWord").value;
  var secondWord = document.getElementById("secondWord").value;
  var anagramResult = document.getElementById("anagramResult");

  a = firstWord.toLowerCase().split("").sort().join("");
  b = secondWord.toLowerCase().split("").sort().join("");

  if (a == b) {
    anagramResult.innerHTML = "Yay!! " + firstWord + " & " + secondWord + " are Anagrams.";
  } else {
    anagramResult.innerHTML = "Oops!! They seem to not be Anagrams :(";
  }
}

//***************** Odd and Even Finder **************

function oeFinder () {
  var oeVal = document.getElementById("oeNum").value;
  var oeResult = document.getElementById("oeResult");

  if(oeVal%2 == 0) {
    oeResult.innerHTML = "Even";
  } else {
    oeResult.innerHTML = "Odd";
  }
}
