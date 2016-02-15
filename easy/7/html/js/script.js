// Write a program that can translate Morse code in the format of ...---...
// A space and a slash will be placed between words. ..- / --.-
// For bonus, add the capability of going from a string to Morse code.
// Super-bonus if your program can flash or beep the Morse.

var morseAlphabet = {
   '.-': 'A',
   '-...': 'B',
   '-.-.': 'C',
   '-..': 'D',
   '.': 'E',
   '..-.': 'F',
   '--.': 'G',
   '....': 'H',
   '..': 'I',
   '.---': 'J',
   '-.-': 'K',
   '.-..': 'L',
   '--': 'M',
   '-.': 'N',
   '---': 'O',
   '.--.': 'P',
   '--.-': 'Q',
   '.-.': 'R',
   '...': 'S',
   '-': 'T',
   '..-': 'U',
   '...-': 'V',
   '.--': 'W',
   '-..-': 'X',
   '-.--': 'Y',
   '--..': 'Z',
  seperator: ' / '
};

window.onload = function () {
  console.log("script loded...");

  document.getElementById("translate").addEventListener("click", translateMorse, false);

};

function translateMorse() {
  var morseCode = document.getElementById("code").value;
  var plainText = "";

  console.log("Morse to Translate: " + morseCode);

  // chop off text before separateor
  var morseWords = morseCode.split(morseAlphabet.seperator);
  for (var i = 0; i < morseWords.length; i++) {
    console.log(morseWords[i]);

    var morseLetters = morseWords[i].split(" ");
    for (var j = 0; j < morseLetters.length; j++) {
      console.log(morseAlphabet[morseLetters[j]])
      plainText += morseAlphabet[morseLetters[j]];
    }
    plainText += " ";
  }

  document.getElementById("translation").innerText = plainText;
}

