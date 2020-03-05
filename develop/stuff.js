 //global variables:
 var startButton = document.getElementById("start-button");
 var nextButton = document.getElementById("setScore");
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

  //set score to 0, set interval timer to 30 seconds
//Timer:
function quizTimer() {
    setInterval(function () {
        if (counter >= 1) {
            counter--;
            countdown.innerText = counter;
        }
        // waiting on code to work, endGame()
        else {
            alert(
                "Time is up!"
            )
        }
        console.log(counter);
    }, 2000)
}

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

console.log(questionArray);

//places first question on page and will loop through the rest of them, once answered.
function placeQuestion () {
    quizTimer();

    questionHere.innerHTML = questionArray[questionNumber].question;


    for (var i=0; i < questionArray[questionNumber].answerChoices.length; i++) {
        var btn = document.createElement("button");
        btn.innerText = questionArray[questionNumber].answerChoices[i];
        btn.setAttribute('class', 'btn btn-secondary');
        answerButtons.appendChild(btn);
        btn.addEventListener("click", checkAnswers);

        console.log(questionArray)
    }


}
//creates quiz start button, 
 var startBtn = document.createElement("button");
 startBtn.innerText = "Start";
 startBtn.setAttribute('class', 'btn btn-secondary');
 startButton.appendChild(startBtn);

 //onclick the quiz will begin with the placeQuestion function
 startBtn.addEventListener("click", placeQuestion);

//checks answer to user click (without the console.log it doesn't work for some reason. Also getting 'target is undefined' bit)
function checkAnswers (event) {
    //targeting the text of the button
        var userSelect = event.target.innerText;
    console.log(userSelect);
        var correctAnswer = questionArray[questionNumber].correctAnswer
    
        if (userSelect === correctAnswer)
        {
            alert("Correct!");
            currentScore++;
            counter += 10;
        }
    
        else {
            alert("Wrong!");
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
        clearInterval(counter);
alert("you got " + currentScore + " correct");
if (currentScore >= 3) {
    alert ("You won!")
}
else {
    alert("You lose!")
}


    }

    //high scores

    //write highscores to local storage (jSON whatever)