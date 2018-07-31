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


//************ Anagram Finder ****************
function anagramLogic (a,b) {
  var firstWord = document.getElementById("firstWord").value;
  var secondWord = document.getElementById("secondWord").value;
  var anagramResult = document.getElementById("anagramResult");
  
  firstWord = a.split("").sort().join("");
  secondWord = b.split("").sort().join("");
  
  if (firstWord == secondWord) {
    anagramResult.innerHTML = "Yay!! " + firstWord + " & " + secondWord + " are Anagrams.";
  } else {
    anagramResult.innerHTML = "Oops!! They seem to not be Anagrams :(";
  }
}
