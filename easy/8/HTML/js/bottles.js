

window.onload = function() {
  document.getElementById("sing").addEventListener("click", singSong, false);
}

function singSong() {
  var bottles = parseInt(document.getElementById("bottles").value);

  while (bottles > 0) {
    if (bottles == 1) {
      console.log(bottles + ' bottle of beer on the wall / ' + bottles + ' bottle of beer / ' +
                'you take one down / pass it around / ' + --bottles + ' bottles of beer on the wall');
    } else {
      console.log(bottles + ' bottles of beer on the wall / ' + bottles + ' bottles of beer / ' +
                  'you take one down / pass it around / ' + --bottles + ' bottles of beer on the wall');
    }
  }
}
