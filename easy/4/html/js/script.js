window.onload = function() {
  document.getElementById("gen-password").addEventListener("click", generatePassword);
};

function generatePassword() {

  var usuableCharacters = [];
  var passwordDiv = document.getElementById("passwords");

  while (passwordDiv.firstChild) {
    passwordDiv.removeChild(passwordDiv.firstChild);
  }

  // usuable characters = 33-127
  for (var i = 33; i <= 127; i += 1) {
    usuableCharacters.push(i);
  }

  var maxLength = parseFloat(document.getElementById("pass-len").value);
  var passwordNum = parseFloat(document.getElementById("pass-num").value);
  var password = '';


  // loop passwordNum times and generate a password for each and append to the bottom of the document.
  for (var i = 0; i < passwordNum; i += 1) {
    password = '';
    for (var j = 0; j < maxLength; j += 1) {
      var nextChar = usuableCharacters[Math.floor(Math.random() * usuableCharacters.length)];
      password += String.fromCharCode(nextChar);
    }

    var passwordElem = document.createElement('p');
    passwordElem.innerText = password;
    passwordDiv.appendChild(passwordElem);
  }

  // document.body.appendChild(passwordDiv);
}
