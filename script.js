//to initiate the quiz
document.querySelector(".container").style.display="none";
document.querySelector(".start-quiz").addEventListener("click",()=>{
  document.querySelector(".container").style.display="inline-block";
  document.querySelector(".stquiz").style.display="none";
});

//questions

const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language"
    ],
    correct: 1,
    feedback: [
      "Oops! That's not what HTML means. It deals with text, not training!",
      "Bang on! HTML means Hyper Text Markup Language.",
      "Not quite! Marketing is great, but HTML isn't about it.",
      "Wrong guess! It's not a tool language, but a markup one."
    ]
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    correct: 2,
    feedback: [
      "HTML structures the content, but styling? Nah.",
      "JQuery is for scripting, not styling.",
      "Yes! CSS is the glow-up guru of the web world!",
      "XML is for data, not dazzling visuals."
    ]
  },
  {
    question: "What does JS stand for?",
    options: ["JavaSyntax", "JavaStyle", "JustScript", "JavaScript"],
    correct: 3,
    feedback: [
      "JavaSyntax sounds real, but it's not JS.",
      "Stylish guess! But no, not JavaStyle.",
      "Just nope! It's not JustScript.",
      "Correct! JavaScript is the brain of the browser."
    ]
  },
  {
    question: "What will `typeof NaN` return in JavaScript?",
    options: ["NaN", "number", "undefined", "object"],
    correct: 1,
    feedback: [
      "`NaN` is the value, not the type!",
      "Correct! Weirdly, `typeof NaN` is `number`. JS is quirky like that.",
      "Nope! It’s defined – just weird.",
      "Close but nope. `object` is what `typeof null` returns."
    ]
  },
  {
    question: "Which keyword is used to define a function in JavaScript?",
    options: ["func", "define", "function", "method"],
    correct: 2,
    feedback: [
      "Nice try, but JS doesn't use `func` like Python.",
      "Nah, `define` belongs in other lands, not here.",
      "Yes! `function` is the OG way to define functions in JS.",
      "`method` is a term, not a keyword!"
    ]
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "/* */", "#"],
    correct: 0,
    feedback: [
      "Yes! // is used for single-line comments in JS.",
      "That’s HTML commenting style.",
      "That’s for multi-line comments, not single-line.",
      "# works in Python, not here!"
    ]
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["Boolean", "Undefined", "Float", "String"],
    correct: 2,
    feedback: [
      "Boolean is real – true or false!",
      "Undefined is used in JS when nothing's assigned yet.",
      "Correct! Float isn’t a JS type – it’s Number instead.",
      "Strings are everywhere in JavaScript."
    ]
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Netscape", "Google", "Microsoft", "Apple"],
    correct: 0,
    feedback: [
      "Correct! Netscape created it back in the day.",
      "Google gave us V8, but didn’t invent JS.",
      "Microsoft did many things, but not JS.",
      "Apple gave us Safari, not JavaScript."
    ]
  },
  {
    question: "How do you declare a variable in JavaScript?",
    options: ["variable carName;", "v carName;", "var carName;", "string carName;"],
    correct: 2,
    feedback: [
      "That looks like a mix of Java and JS.",
      "Not how JS rolls.",
      "Yes! Classic JS way to declare a variable.",
      "String is for types in other languages."
    ]
  },
  {
    question: "Which method is used to write on browser in JS?",
    options: ["console.write()", "document.write()", "window.print()", "alert()"],
    correct: 1,
    feedback: [
      "Console is for dev tools, not the webpage.",
      "Correct! document.write() writes on the page.",
      "This prints to printer, not to browser.",
      "Alert shows pop-ups, not writes on page."
    ]
  }
];

//variable declaration
let score = 0;
let count=0;
let totalScore = 10;
let question = document.querySelector(".question");
let answerButton = document.querySelectorAll(".ans-btn");
const feedback =  document.querySelector(".feedback");
const choices = document.querySelectorAll(".ans-btn");
const nextButton = document.querySelector(".next-btn");
document.querySelector(".reset-btn").style.display="none";
question.textContent=quizData[0].question;
answerButton.forEach((btn,index) => {
btn.textContent=quizData[0].options[index];
});

feedback.style.display="none"; 
nextButton.style.pointerEvents = "none"; 

//next click operation
function next (){
  feedback.style.display="none";
  count++;
  if(count >= quizData.length) {
    resetQuiz();
    return;
  }
  let question = document.querySelector(".question");
  question.textContent=quizData[count].question;

  let answerButton = document.querySelectorAll(".ans-btn");
  answerButton.forEach((btn,index) => {
  btn.textContent=quizData[count].options[index];
  });
  choices.forEach((btn) => {
    btn.style.pointerEvents = "auto";
  });  
  nextButton.style.pointerEvents = "none";
  choices.forEach((btn)=>{
    btn.style.backgroundColor="#f2f2f2";
  });
}
document.querySelector(".next-btn").addEventListener("click",next); //calling next function

choices.forEach((btn,index)=>{
  btn.addEventListener("click",(e)=>{
    feedback.style.display="block";
    feedback.innerHTML=quizData[count].feedback[index];
    let chosenAnswer=e.target.innerHTML;
    let correctAnswer = quizData[count].options[quizData[count].correct];
    if (chosenAnswer == correctAnswer){
      e.target.style.backgroundColor = "lightgreen";
      score++;
    }else{
      e.target.style.backgroundColor = "salmon";
    }
    nextButton.style.pointerEvents = "auto";
    choices.forEach((btn) => {
      btn.style.pointerEvents = "none";
    });
  })
});

//reset operation
document.querySelector(".reset-btn").addEventListener("click", () => {
  score = 0;
  count = 0;

  question.textContent = quizData[0].question;
  choices.forEach((btn, index) => {
    btn.style.display = "block";
    btn.textContent = quizData[0].options[index];
    btn.style.backgroundColor = "#f2f2f2";
    btn.style.pointerEvents = "auto";
  });
  nextButton.style.display = "inline-block";
  nextButton.textContent = "Next";
  nextButton.style.pointerEvents = "none";
  document.querySelector(".reset-btn").style.display = "none";
  feedback.style.display = "none";
});
function resetQuiz(){
  document.querySelector(".question").textContent=`Your Score is ${score}/${totalScore}`;
  document.querySelector(".next-btn").style.display="none";
  document.querySelector(".reset-btn").style.display="inline-block";
  choices.forEach((btn)=>{
    btn.style.display="none";
  });
}
