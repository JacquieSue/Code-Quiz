// GIVEN I am taking a code quiz
// put var(s) here:
var startButton = document.querySelector(".start-button");
var timeEl = document.querySelector(".time");
// document.querySelectorAll()

var HScount = localStorage.getItem("HScount");

// Create function 
// The init function is called when the page loads 
function init() {
    getHighscores();
}

// WHEN I click the start button
// The startQuiz function is called
function startQuiz() {
    isCorrect = false;
    timerCount = 59;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;
    // The winGame function is called when the win condition is met

    function completedQuiz() {
        wordBlank.textContent = "Quiz Completed!";
        winCounter++
        startButton.disabled = false;
    }
    setHighscores()
    renderBlanks()
    startTimer()
}
// add start button
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);

// Add eventListener
// Attach event listener to document to listen for key event
document.addEventListener("keydown", function (event) {
    // If the count is zero, exit function
    if (timerCount === 0) {
        return;
    }
}
    //THEN a timer starts and I am presented with a question
    // Selects element by class
    //var timeEl = document.querySelector(".time");
    // The setTimer function starts and stops the timer and triggers endQuiz()
    function startTimer() {
        // Sets timer
        timer = setInterval(function () {
            timerCount--;
            timerElement.textContent = timerCount;
            if (timerCount >= 0) {
                // Tests if correct answer is met
                if (isCorrect && timerCount > 0) {
                    // Clears interval and stops timer
                    clearInterval(timer);
                    completedQuiz();
                }
            }
            // Tests if time has run out
            if (timerCount === 0) {
                // Clears interval
                clearInterval(timer);
                endQuiz();
            }
        }, 1000);
    }
    // Selects element by id
    var mainEl = document.getElementById("main")

    var secondsLeft = 59;

    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function () {
            secondsLeft--;

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                sendMessage();
            }

        }, 1000);
    }
    setTime();

    //WHEN I answer a question
    function correctAnswer() {
        //if the answer is correct        
        if (choice === buttons.join("")) {
            // This value is used in the timer function to test if win condition is met
            isCorrect = true;
        }
    }
    //THEN I am presented with another question
    //create a loop
    function checkAnswer(options) {
        var correctAnswer = true;
        for (var i = 0; i < correctAnswer; i++) {
            if (option[i] === correct) {
                correctAnswer = true;
            } else {
                correctAnswer !== true
            }

        }
    }
    wordBlank.textContent = blanksLetters.join(" ");


    //WHEN I answer a question incorrectly
    //make "if" statement

    //THEN time is subtracted from the clock
    //setInterval for seconds left
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function () {
            secondsLeft--;

            if (secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                sendMessage();
            }

        }, 1000);
    }
    setTime();
    
    //WHEN all questions are answered or the timer reaches 0
    //clear interval(timer interval)

    //THEN the game is over
    //return ends the finction
// The endQuiz function is called when timer reaches 0
function endQuiz() {
        wordBlank.textContent = "QUIZ OVER";
        loseCounter++
        startButton.disabled = false;
        setLosses()
    }
    //WHEN the game is over

    //THEN I can save my initials and score
    //Add reset button
    var clearHSButton = document.querySelector(".clear-high-scores");

function clearHighScores() {
    // Clears the high scores
    FinalScoreCounter = 0;
    // Renders the final score and sets it into client storage
    function setFinalScore() {
        highscores.textContent = highscoresCounter;
        localStorage.setItem("highscoresCount", highscoresCounter);
    }
    // Attaches event listener to button
    clearHSButton.addEventListener("click", clearHighScores)
}


// These functions are used by init
function getHighscores() {
    // Get stored value from client storage, if it exists
    var storedHighscores = localStorage.getItem("Highscores");
    // If stored value doesn't exist, set counter to 0
    if (storedHighscores === null) {
        highscoresCounter = 0;
    } else {
        // If a value is retrieved from client storage set the winCounter to that value
        highscoresCounter = storedHighscores;
    }
    //Render win count to page
    highscores.textContent = highscoresCounter;
}