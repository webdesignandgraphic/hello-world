//variables
var playing = false;
var score;
//if we click on the start/reset
document.getElementById("startreset").onclick = function() {
    //if we are playing
if(playing === true) {
      location.reload(); //relaod the page
} else {//if we are not playing 
    //set score to 0
      score = 0;
      document.getElementById("scorevalue").innerHTML = score;
      document.getElementById("timeremaining").style.dysplay = "block";
}
}