// declare your variables here: hitcount, setint_val, starttime, ...

function newgame() {
    // your code to set up for each new game goes here:
  // clearInterval(setint_val) to reset the interval set by a previous game
  // set hitcount to 0
  // call setInterval() to set the interval from the value in the form
  // initialize starttime, the starting time, using new Date(...)
}

function moveit() {
    // your code to move your image goes here:
  // move the image, using the code given above
}

function hit() {
    // your code to handle each successful hit goes here:
  // move the image with moveit()
  // add 1 to hitcount
  if (hitcount >= 3) {
     // clearInterval() to stop the image from moving
     // compute the elapsed time (make another call to new Date())
     // confirm() to display time and ask about another game
     // if another game is to be played
     //   newgame()
  }
}
</script>
