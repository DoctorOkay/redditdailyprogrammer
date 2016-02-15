window.onload = function() {
  document.getElementById("hello-form").addEventListener("submit", displayName, false);
}

function displayName(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var username = document.getElementById("username").value;
  var greeting = "Your name is " + name + ", you are " + age + " years old, and your reddit username is " + username;

  var greeting_elem = document.querySelector(".hello");
  greeting_elem.innerHTML = greeting;
}
