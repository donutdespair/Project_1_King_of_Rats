//run js when document fully loaded
$(document).ready(function() {
console.log('script loaded');

/////////////Game Sounds///////////
var gameTheme = new Audio('media/gameaudio.mp3');
var smashSound = new Audio('media/smash.mp3');

////////////Global Variables///////////
var score = 0;
var timer = 60;
var body = $('body');
var display = $(".display");
var rat = $(".rat");
var gameInterval;
var createInterval;
var ratTimeout;

///////////Start Game//////////
$(function() {
  $('.scoreboard').hide();
  $('.rat').hide();
  $('.display').hide();
  //everything is hidden until start button is clicked
$("#startbutton" ).click(function() {
  $(this).hide();
  //starts button hidden onclick, game shows, audio starts
  $("#startscreen" ).hide();
  $('.display').show();
  $('.scoreboard').show();
  $('#scorenum').text(" 0");
  gameTheme.play();
  gameInterval = setInterval(gameTime, 1000);
  createInterval = setInterval(createPests, 800);
  ratTimeout = setTimeout(ratOut, 900);
    });



/////////// Rats Created///////////////
var createPests = function(){
  var randomRat = Math.floor(Math.random() * $('.rat').length);
  //this chooses the number of the rat div to show
  //you have a random number between 0 and 1 * the number
  //of "rat" divs that is rounded down to the nearest whole number
  $('.rat').hide().eq(randomRat).show().removeAttr('style').effect('bounce');
    };
  //the random value is passed to the .eq method with constructs
  //a new jQuery object based on the element passed to it (the hidden rats)
  //the randomly chosen rat is shown and bounces a little




///////////// Rats Disappear/////////////
var ratOut = function() {
  $(".rat").hide();
  }
//rat hides after time specified in setTimeout above

//////////Rats get SMAAAASHED///////
 $(".rat").on('click', theScore)
 //rat div on click event
function theScore() {
    score = score +1;
    //a point is added for each rat clicked
    //console.log(score); //for testing
   $('#scorenum').text(" " + score);
    //the score text is added to the scoreboard
    $(this).css('background-image', 'url(media/blood.png)');
    smashSound.play()
  //the splat sound plays
  setTimeout(function() {
  //the rats lhide so they can be shown again
  //removes the added css attr that changes the background to the splatter
  $(this).hide();
      }, 300)
};

var gameTime = function () {
timer--;
//timer counts down by one
$("#timernum").text(' ' + timer);
//prints time to timer on scoreboard
if (timer == 0) {
  //clears timer, rat genration, and rat disappearance
    clearInterval(gameInterval);
    clearInterval(createInterval);
    clearTimeout(ratTimeout);
//conditions for winning and losing
      if (score < 35) {
          if (window.confirm("You lose, play again?")) {
              location.reload();
            }
          //user can confirm to play again or cancel and be redirected
          else (document.location.href = "http://www.aspca.org/nyc");
          }
      else {
          if (window.confirm("You win, play again?")) {
               location.reload();
            }
          else (document.location.href = "http://www.aspca.org/nyc");
            }
        }

    };
});
});


///////Game Audio/////

//////Gameplay Song//////
//http://www.tannerhelland.com/9/clowns/

/////Sounds/////
//smash --> http://soundbible.com/1876-Punch-HD.html


//////Programming Sources Consulted//////
//https://api.jquery.com/eq/
//http://stackoverflow.com/questions/19244394/creating-a-timer-for-a-javascript-game-gives-undesirable-results
//http://ejohn.org/blog/how-javascript-timers-work/
