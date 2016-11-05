
$(document).ready(function() {
console.log('script loaded');
var gameTheme = new Audio('gameaudio.mp3');
var smashSound = new Audio('smash.mp3');
var score = 0;



$(function() {
$('.scoreboard').hide();
$('.rat').hide();
$('.display').hide();
$('.hole').hide();
$("#startbutton" ).click(function() {
$(this).hide();
$("#startscreen" ).hide();
$('.display').show();
$('.hole').show();
$('.scoreboard').show();
gameTheme.play();
});

var body = $('body');
var display=$(".display");
var rat=$(".rat")




/////////// Rats Created//////////////////
var createPests = function(){
var randomRat = Math.floor(Math.random() * $('.rat').length);
$('.rat').hide().eq(randomRat).show().effect("shake");
};
setInterval(createPests, 600);



///////////// Rats and Roaches Disappear/////////////
var ratOut = function() {
$(".rat").fadeOut().hide();
}
setTimeout(ratOut, 700);


//////////Rats and Roaches get SMAAAASHED///////


//add point



 $(".rat").on('click', keepScore)
function keepScore() {
  score = score +1;
  console.log(score);
  $('#scorenum').text(" " + score);
  $(this).addClass("smash");
  smashSound.play();


var smashGone =
setTimeout(function() {
$(".rat").removeClass('smash');
$(".rat").hide();
      }, 500)
    };


});
});

//http://stackoverflow.com/questions/12569879/create-an-animation-sequence-loop-jquery
//http://stackoverflow.com/questions/19244394/creating-a-timer-for-a-javascript-game-gives-undesirable-results
///////Game Audio/////

//////Gameplay Song//////
//http://www.tannerhelland.com/9/clowns/

/////Sounds/////
//smash --> http://soundbible.com/1945-Smashing.html
//http://soundbible.com/1454-Pain.html
