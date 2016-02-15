onload = function() {
  document.getElementById("calc-pi").addEventListener("click", calculatePi, false);
}

function calculatePi() {
  var digits = parseInt(document.getElementById("digits").value);
  var currentDigits = 0;
  var pi = 0.0;
  var divisor = 1;
  var calculating = true;

  pi = 4 * (4 * Math.atan2(1, 5) - Math.atan2(1, 239));

  document.getElementById("pi").innerText = pi.toPrecision();
}
