var numbers = [];

window.onload = function () {
  document.getElementById("add-number").addEventListener("click", sortNumbers);
}

function sortNumbers() {
  var nextNumber = parseInt(document.getElementById("new-number").value);

  numbers.push(nextNumber);
  numbers = numbers.sort(function(a, b) {
    return a - b;
  });

  document.getElementById("output").innerText = numbers.join(" ");
}
