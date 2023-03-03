// GIVEN I am taking a code quiz
// put var(s) here:
var startButton = document.querySelector("#start-button");
var timeEl = document.querySelector(".time");
var startBox = document.querySelector("#start-box");
var questionBox = document.querySelector("#question-box");
var endBox = document.querySelector("#end-box");
var highscoresBox = document.querySelector("#highscore-box");
var clearHSButton = document.querySelector(".clear-high-scores");
var questionEl = document.querySelector("#quesionEl");
var choiceBox = document.getElementById("choice-box")
// Selects element by id
var mainEl = document.getElementById("main")

var secondsLeft = 59;
var questions = [{
    question: "Arrays in JavaScript can be used to store.",
    choice1: "JavaScript (Q1)",
    choice2: "booleans (Q1)",
    choice3: "alerts (Q1)",
    choice4: "numbers (Q1)",
    correct: "JavaScript (Q1)",
},{
    question: "this is question 2",
    choice1: "I am choice 1(Q2)",
    choice2: "I am choice 2(Q2)",
    choice3: "I am choice 3(Q2)",
    choice4: "I am choice 4 (Q2)",
    correct: "I am choice 3(Q2)",
},{
    question: "this is question 3",
    choice1: "I am choice 1(Q3)",
    choice2: "I am choice 2(Q3)",
    choice3: "I am choice 3(Q3)",
    choice4: "I am choice 4 (Q3)",
    correct: "I am choice 3(Q3)",
},{
    question: "this is question 4",
    choice1: "I am choice 1(Q3)",
    choice2: "I am choice 2(Q3)",
    choice3: "I am choice 3(Q3)",
    choice4: "I am choice 4 (Q3)",
    correct: "I am choice 3(Q3)",
},{
    question: "this is question 5",
    choice1: "I am choice 1(Q3)",
    choice2: "I am choice 2(Q3)",
    choice3: "I am choice 3(Q3)",
    choice4: "I am choice 4 (Q3)",
    correct: "I am choice 3(Q3)",
    },]

var questionsIndex = 0;
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
secondsLeft= 59;
questionsIndex =0;
    // Prevents start button from being clicked when round is in progress
    // The winGame function is called when the win condition is met
startBox.style.display="none";
questionBox.style.display="block";
   
    // setHighscores()
    // renderBlanks()
    startTimer()
    displayQuestion()
}
// add start button

function displayQuestion (){
questionEl.textContent = questions[questionsIndex].question
document.getElementById("choice1El").textContent = questions[questionsIndex].choice1
document.getElementById("choice2El").textContent = questions[questionsIndex].choice2
document.getElementById("choice3El").textContent = questions[questionsIndex].choice3
document.getElementById("choice4El").textContent = questions[questionsIndex].choice4
}
function completedQuiz() {
    wordBlank.textContent = "Quiz Completed!";
    winCounter++
    startButton.disabled = false;
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
function checkAnswer(event) {
    console.log(event)
    if(event.target.matches("button")){
        if(event.target.textContent === questions[questionsIndex].correct){
console.log("correct")
        } else{
console.log("wrong")
        }
        questionsIndex++ 
        if(questionsIndex == questions.length){
            endQuiz() 
        } else {
            displayQuestion()
        }
        
        
    }

    
}


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
// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startQuiz);
choiceBox.addEventListener("click", checkAnswer);
