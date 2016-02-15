onload = function () {
  document.getElementById("validate").addEventListener("click", validatePhoneNbr);
}

function validatePhoneNbr () {
  // phone number comes in as string
  // proper form (555) 555-5555
  var validPatterns = [
    "(xxx) xxx-xxxx",
    "xxx xxx xxxx"
  ];
}
