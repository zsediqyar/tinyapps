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
