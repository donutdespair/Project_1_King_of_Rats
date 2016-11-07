//create smash div, hide, then show onclick


//run js when document fully loaded
$(document).ready(function() {
console.log('script loaded');

/////////////Game Sounds///////////
var gameTheme = new Audio('gameaudio.mp3');
var smashSound = new Audio('smash.mp3');

////////////Global Variables///////////
var score = 0;
var timer = 60;
var body = $('body');
var display = $(".display");
var rat = $(".rat");
var intervalId;
var timeoutId;
var createInterval;
var ratTimeout;

///////////Start Game//////////
$(function() {
$('.scoreboard').hide();
$('.rat').hide();
$('.display').hide();
$('.hole').hide();
//everything is hidden until start button is clicked
$("#startbutton" ).click(function() {
$(this).hide();
//starts button hidden onclick, game shows, audio starts
$("#startscreen" ).hide();
$('.display').show();
$('.hole').show();
$('.scoreboard').show();
$('#scorenum').text(" 0");
gameTheme.play();
intervalId = setInterval(gameTime, 1000);
createInterval = setInterval(createPests, 1000);
ratTimeout = setTimeout(ratOut, 500);
    });



/////////// Rats Created///////////////
var createPests = function(){
var randomRat = Math.floor(Math.random() * $('.rat').length);
//this chooses the number of the rat div to show
//you have a random number between 0 and 1 * the number
//of "rat" divs that is rounded down to the nearest whole number
$('.rat').hide().eq(randomRat).show().effect("shake");
    };
//the random value is passed to the .eq method with constructs
//a new jQuery object based on the element passed to it (the hidden rats)
//the randomly chosen rat is shown and shakes
//a new rat is created every 600ms
setInterval(createPests, 1000);



///////////// Rats Disappear/////////////
var ratOut = function() {
$(".rat").fadeOut().hide();
  }
setTimeout(ratOut, 500);
//this function causes the rat to fade out and hide at 700ms after showing

//////////Rats get SMAAAASHED///////
 $(".rat").on('click', theScore)
 //rat div on click event
function theScore() {
  score = score +1;
  //a point is added for each rat clicked
  //console.log(score); //for testing
  $('#scorenum').text(" " + score);
  //the score text is added to the scoreboard
  $(this).addClass("smash");
  //the rat gets the class "smash" which changes it to a pool of rat remains
  smashSound.play();
//the splat sound plays
var smashGone =
setTimeout(function() {
$(".rat").removeClass('smash');
//the rats lose the smash class and hide so they can be shown again
$(".rat").hide();
      }, 500)
};

var gameTime = function () {
timer--;
//timer counts down by one
$("#timernum").text(' ' + timer);
if (timer == 0) {
    alert('Times up!');
    clearInterval(intervalId);
    clearTimeout(timeoutId);
    clearInterval(createInterval);
    clearTimeout(ratTimeout);
      if (score < 50) {
      alert("You lose")
          }
      else alert("You win")
        }

    };




  });
    });


///////Game Audio/////

//////Gameplay Song//////
//http://www.tannerhelland.com/9/clowns/

/////Sounds/////
//http://soundbible.com/1945-Smashing.html


//////Programming Sources Consulted//////
//https://api.jquery.com/eq/
//http://stackoverflow.com/questions/12569879/create-an-animation-sequence-loop-jquery
//http://stackoverflow.com/questions/19244394/creating-a-timer-for-a-javascript-game-gives-undesirable-results
//https://api.jqueryui.com/shake-effect/
//http://ejohn.org/blog/how-javascript-timers-work/
//http://www.phpied.com/files/location-location/location-location.html







