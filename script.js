let questions = [
    {
        question: "When was Inter Milan founded?",
        options: [
            "1908", // Correct
            "1910",
            "1925",
            "1935",
        ],
        correctAnswer: "1908",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "What are Inter Milan's team colors?",
        options: [
            "Blue and White",
            "Black and Blue", // Correct
            "Red and Black",
            "Yellow and Blue",
        ],
        correctAnswer: "Black and Blue",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "What is the name of Inter Milan's home stadium?",
        options: [
            "Stadio Olimpico",
            "Allianz Stadium",
            "San Siro", // Correct
            "Stadio Giuseppe Meazza",
        ],
        correctAnswer: "San Siro",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "Who is Inter Milan's most famous player, known for his time at the club from 1997 to 2009?",
        options: [
            "Javier Zanetti", // Correct
            "Ronaldo Nazário",
            "Samuel Eto'o",
            "Giuseppe Meazza",
        ],
        correctAnswer: "Javier Zanetti",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "How many Serie A titles has Inter Milan won as of 2023?",
        options: [
            "16",
            "18",
            "19", // Correct
            "21",
        ],
        correctAnswer: "19",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "In which year did Inter Milan win their first UEFA Champions League title?",
        options: [
            "1964", // Correct
            "1965",
            "2010",
            "2007",
        ],
        correctAnswer: "1964",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "What is the nickname of Inter Milan?",
        options: [
            "The Rossoneri",
            "The Nerazzurri", // Correct
            "The Biancocelesti",
            "The Giallorossi",
        ],
        correctAnswer: "The Nerazzurri",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "Which coach led Inter Milan to a historic treble in the 2009-2010 season?",
        options: [
            "Roberto Mancini",
            "José Mourinho", // Correct
            "Frank de Boer",
            "Antonio Conte",
        ],
        correctAnswer: "José Mourinho",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "Who is Inter Milan's main rival in the Derby della Madonnina?",
        options: [
            "AS Roma",
            "Juventus",
            "AC Milan", // Correct
            "Napoli",
        ],
        correctAnswer: "AC Milan",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,
    },
    {
        question: "In which year did Inter Milan last win the Serie A title as of 2023?",
        options: [
            "2021", // Correct
            "2020",
            "2018",
            "2019",
        ],
        correctAnswer: "2021",
        isAnsweredCorrect: null,
        isAnswered: false,
        answer: null,

    },
];

let quizContainer = document.querySelector(".quiz-container")

let limit = questions.length
let score = 0;
let count = 0;

function render(questions) {
    quizContainer.innerHTML = ''

    questions.forEach((el, index) => {
        let item = `
        <div>
           <p class="question">${el.question}</p>
           ${el.options.map((option, optionIndex) => {

            if (el.isAnswered === true) {
                return (
                    `<button disabled="true" class="option ${el.answer === optionIndex && el.isAnsweredCorrect ? "correct" : "incorrect"} ">${option}</button>`
                )
            } else {
                return (
                    `<button onclick="checkAnswer(${index},'${option}',${optionIndex})" class="option ">${option}</button>`
                )
            }


        }).join('')}
        </div>
        `
        quizContainer.insertAdjacentHTML('beforeend', item)
    })
}

render(questions)

/*
 <label class="answer"> <input type="radio" name="quiz" value="1"> Paris </label>
*/

//Davit: Inter Milan
let result = document.querySelector("#result")
function checkAnswer(index, choosenAnswer, optionIndex) {
    count++
    if (questions[index].correctAnswer === choosenAnswer) {
        questions[index].isAnswered = true
        questions[index].isAnsweredCorrect = true
        questions[index].answer = optionIndex
        score += 10
    } else {
        questions[index].isAnswered = true
        questions[index].isAnsweredCorrect = false
        questions[index].answer = optionIndex
    }

    render(questions)


    setTimeout(() => {
        if (limit === count) {
        alert(`Your score is ${score}`)
    }   
    }, 0);
 
}

// css red and blue

