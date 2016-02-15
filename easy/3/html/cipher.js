onload = function() {
  document.getElementById("encrypt-form").addEventListener("submit", encryptText, false);
}

function encryptText(e) {
  e.preventDefault();

  var shift = parseFloat(document.getElementById("shift").value);
  var plaintext = document.getElementById("plaintext").value;

  var codes = charCodesFromString(plaintext);
  var shiftedCodes = shiftArray(codes, shift);
  var ciphertext = stringFromCharCodes(shiftedCodes);

  document.getElementById("ciphertext").textContent = ciphertext;
}

function charCodesFromString(s) {
  var map = Array.prototype.map;
  return map.call(s, getCharCode);
}

function getCharCode(s) {
  return s.charCodeAt(0);
}

function stringFromCharCodes(arr) {
  var letters = arr.map(function (x) {
    return String.fromCharCode(x);
  });
  return letters.join('');
}

function shiftArray(arr, n) {
  // Shift values in arr by n values
  // Ignore non-alphabetic characters

  var ignore = [];
  for (var i = 0; i < 65; i++) {
    ignore.push(i);
  }

  for (var i = 91; i < 97; i++) {
    ignore.push(i);
  }


  return arr.map(function(x) {
    if (ignore.includes(x) || x > 122) {
      return x;
    }

    if ((x + n > 122) || (x + n > 90 && x < 97)) {
      x -= 26;
    }
    return x + n
  });
}
