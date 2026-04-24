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
const answerButton = document.getElementById("answer-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;



