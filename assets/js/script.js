//GIVEN I am taking a code quiz
//var(s):

//document.querySelectorAll()

//Create function 


//WHEN I click the start button
//Add eventListener

//THEN a timer starts and I am presented with a question
// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 59;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
setTime();

//WHEN I answer a question

//THEN I am presented with another question

//WHEN I answer a question incorrectly

//THEN time is subtracted from the clock

//WHEN all questions are answered or the timer reaches 0
//clear interval(timer interval)

//THEN the game is over
//return ends the finction

//WHEN the game is over

//THEN I can save my initials and score
//Add reset button
var clearHSButton = document.querySelector(".clear-high-scores");

function clearHighScores() {
  // Clears the high scorews
  FinalScoreCounter = 0;
  // Renders the final score and sets it into client storage
  setFinalScore()

}
// Attaches event listener to button
clearHSButton.addEventListener("click", clearHighScores);