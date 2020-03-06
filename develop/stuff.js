 //global variables:
 var startButton = document.getElementById("start-button");
 var setScore = document.getElementById("setScore");
 var questionHere= document.getElementById("question");
 var answerButtons= document.getElementById("answer-buttons");
 var questionNumber= 0;
 var rules = document.getElementById("rules");

 //score
 var currentScore = 0;
 var scoreCounter = document.getElementById("score");

 //timer variables
 var countdown = document.getElementById("countdown");
 var timerSet;
 var counter = 30;

// //sets a Score Button --next event
//  var scoreButton = document.createElement("button");
// scoreButton.innerHTML = "Set Score";
// scoreButton.setAttribute('class', 'btn btn-secondary');
// setScore.appendChild(scoreButton);
// scoreButton.addEventListener("click", toHighScores);

 //questions and the answer array:
 var questionArray = [
    {
        question: 'Where was I born?',
        answerChoices: ['Nashville, TN', 'Buffalo, NY', 'Salt Lake City, UT', 'Denver, CO'],
        correctAnswer: 'Nashville, TN'
    },
    {
        question: 'Where did I receive my Bachelors Degree?',
        answerChoices: ['Ohio State University', 'Ole Miss', 'Vanderbilt University', 'Middle Tennessee State University'],
        correctAnswer: 'Middle Tennessee State University'
    },
    {
        question: 'What is my favorite snack?',
        answerChoices: ['beef jerky', 'oreo cookies', 'veggies and dip', 'fruit'],
        correctAnswer: 'oreo cookies'
    },
    {
        question: 'What is my pets name and species?',
        answerChoices: ['a dog named Jack', 'a fish named Kabob', 'A cat named Panther Lilly', 'a horse named Sabrina'],
        correctAnswer: 'A cat named Panther Lilly'
    },
    {
        question: 'How many siblings to I have?',
        answerChoices: ['none', 'five', 'two', 'one'],
        correctAnswer: 'two'
    }

]

 //creates quiz start button, 
 var startBtn = document.createElement("button");
 startBtn.innerText = "Start";
 startBtn.setAttribute('class', 'btn btn-secondary');
 startButton.appendChild(startBtn);

 //onclick the quiz will begin with the placeQuestion function
 startBtn.addEventListener("click", placeQuestion);

//FUNCTIONS:

  //set score to 0, set interval timer to 30 seconds
function quizTimer() {
    timerSet = setInterval(()=>{
      counter --
      countdown.innerText = counter;
  
      // ends quiz if no time left, doesn't work, doesn't stop it at 0.
      if (counter === 0) {
        endGame();
      };
    },2000)
};   
            
//places first question on page and will loop through the rest of them, once answered.
function placeQuestion () {
    if (questionNumber === 0) {
        quizTimer();
    }
  
    rules.textContent = "";
    questionHere.innerHTML = questionArray[questionNumber].question;


    for (var i=0; i < questionArray[questionNumber].answerChoices.length; i++) {
        var btn = document.createElement("button");
        btn.innerText = questionArray[questionNumber].answerChoices[i];
        btn.setAttribute('class', 'btn btn-secondary');
        answerButtons.appendChild(btn);
        btn.addEventListener("click", checkAnswers);
    }

}

//checks answer to user click
function checkAnswers (event) {
    //targeting the text of the button
        var userSelect = event.target.innerText;
        var correctAnswer = questionArray[questionNumber].correctAnswer
    
        if (userSelect === correctAnswer)
        {
            rules.textContent = "Correct!";
            currentScore++;
            counter += 10;
        }
    
        else {
            rules.textContent = "Wrong!";
            counter -= 5;
        }

    questionNumber ++;
    scoreCounter.innerHTML = (currentScore);
    //clears the space for the next question and answers
    questionHere.innerHTML = "";
    answerButtons.innerHTML = "";

    if (questionNumber == 5) {
        //need to define endGame() function
        endGame();
    }
    else{

        placeQuestion();
    }

    }

//add function to relay message that game is over, and what your score is out of 5. 
    function endGame() { 
        clearInterval(timerSet);
        counter = 30;
scoreCounter.innerHTML= "You got " + currentScore + " correct.";

if (currentScore >= 3) {
    rules.innerText= "You won!";
}
else {
    rules.innerText="You lose!";
}
    }

//up NEXT
    //high scores
// function toHighScores (){


// }
    //write highscores to local storage (jSON whatever)

