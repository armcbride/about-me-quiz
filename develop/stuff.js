 //global variables:
 var startButton = document.getElementById("start-button");
 var nextButton = document.getElementById("next");
 var questionHere= document.getElementById("question");
 var answerButtons= document.getElementById("answer-buttons");
 var questionNumber= 0;

 //score
 var currentScore = 0;
 var scoreCounter = document.getElementById("score");

 //timer variables
 var countdown = document.getElementById("countdown");
 var timerSet;
 var counter = 5;

  //set score to 0, set interval timer to 30 seconds
//Timer:
function quizTimer() {
    setInterval(function () {
        if (counter >= 1) {
            counter--;
            countdown.innerText = counter;
        }
        // waiting on code to work, endGame()
        // else {
        //     alert(
        //         "Time is up!"
        //     )
        // }
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

//places first question on page
function placeQuestion () {

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
placeQuestion ();

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

    if (questionNumber > 4) {
        endGame();
    }
    else{

        placeQuestion();
    }

    }

    checkAnswers();

    // quizTimer();