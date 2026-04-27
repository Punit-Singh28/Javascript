const questions = [
    {
        question: "Which is the fastes animal?",
        answer: [
           {text: "Shark", correct: false},
           {text: "Blue whale", correct: true},
           {text: "Elephant", correct: false},
           {text: "Giraff", correct: false} 
        ]
    },
    {
        question: "Which is the smallest Continent in the World?",
        answer: [
           {text: "Asia", correct: false},
           {text: "Australia", correct: true},
           {text: "Arctic", correct: false},
           {text: "Africa", correct: false} 
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelector(".answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questNo + ". "+ currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;

        } 
        button.addEventListener("click", selectAnswer);

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);

    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect =  selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;

    }else{
        selectBtn.classList.add("incorrect");

    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

function showScore() {
    resetState();
    questionElement.innerHTML =`Your Score ${score} out of ${questions.length}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

startQuiz();
