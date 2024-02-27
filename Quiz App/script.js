const questions = [
    {
        question: "What is the capital of Nigeria",
        answers: [
            { text: "Kano", correct: false},
            { text: "Abuja", correct: true},
            { text: "Kaduna", correct: false},
            { text: "Katsina", correct: false},
        ]
    },
    {
        question: "what is the largest city in Nigeri",
        answers: [
            { text: "Kano", correct: false},
            { text: "Abuja", correct: false},
            { text: "Kaduna", correct: false},
            { text: "Ibadan", correct: true},
        ]
    },
    {
        question: "...... is called the center of commerce",
        answers: [
            { text: "Kano", correct: true},
            { text: "Lagos", correct: false},
            { text: "Kaduna", correct: false},
            { text: "Katsina", correct: false},
        ]
    },
    {
        question: "The most populated city in Nigeria is",
        answers: [
            { text: "Kano", correct: false},
            { text: "Abuja", correct: false},
            { text: "Lagos", correct: true},
            { text: "Katsina", correct: false},
        ]
    },
    {
        question: "What is the capital of Nigeria",
        answers: [
            { text: "Kano", correct: false},
            { text: "Abuja", correct: true},
            { text: "Kaduna", correct: false},
            { text: "Katsina", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;



function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

        if(answer.correct){
           button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
} 

function resetState(){
    nextBtn.style.display = "none";

    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++
    }else{
        selectedBtn.classList.add("incorrect");
    }
     Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }else{ 
            button.disabled = true;
        }
     });
     nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handleNextBtn(){
  currentQuestionIndex++;

  if(currentQuestionIndex , questions.length){
    showQuestion();
  }else{
    showScore();
  }

}

nextBtn.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextBtn();
    }else{
        startQuiz();
    }
})

startQuiz();   