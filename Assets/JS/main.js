console.log("https://youtu.be/49pYIMygIcU?t=438");

const questions = require("./questions.js");

// Making Variables for all elements that need to be munipulated //
const start = $("#start");
const reset = $("#reset");
const timeLeft = $("#clock");
const questionImg = $("#questionImg");
const question = $("#question");
const counter = $("#counter");
const choice1 = $("#choice1");
const choice2 = $("#choice2");
const choice3 = $("#choice3");
const choice4 = $("#choice4");
const userInput = [];

// End game when the for loop gets to the last question arr //
let questionIndex = questions.length - 1;
// Create question iterator //
let runningQuestionIndex;

// Function to render questions in the buttons //
function renderQuestion() {
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[questionIndex];
    $("#question").text(currentQuestion.question);
    $("#questionImg").text(currentQuestion.src);
    $("#choice1").text(currentQuestion.choice1);
    $("#choice2").text(currentQuestion.choice2);
    $("#choice3").text(currentQuestion.choice3);
    $("#choice4").text(currentQuestion.choice4);
  }
}

// function progressBar() {
//   for (let i = 0; i <= lastQuestionIndex; i++){
//     $("#progress")
//     .append("<div>")
//     .addClass("progress")
//     .attr("id='questionIndex'")
// }

// for (let i = 0; i < questions.length; i++){
//   console.log(questions[i].question);
//   console.log(questions[i].src);
//   console.log(questions[i].choice1);
//   console.log(questions[i].choice2);
//   console.log(questions[i].choice3);
//   console.log(questions[i].correct);
// }

// $("#reset").hide();
// $("#start").on("click", () => {
//   $("#gameArea").show();
// });

// $(document).ready(function() {

//   var question1 = questionsArr[0];

//   console.log(optionsArr[0][0]); //Prints Forest Gump

//   console.log(answerArr[0]);

//   // default variables //
//   var correct = 0;
//   var incorrect = 0;
//   var unanswered = 0;
//   var questionCount = 0;

//   // jQuery Variables //

//   var count;

//   $(".option").on("click", function() {
//     event.preventDefault();
//   });

//   // APPEND questionArr to option buttons
//   for (i = 0; i < questionsArr.length; i++) {
//     //console.log(questionsArr[i]);
//     var count = 0;
//     $("#question").text(questionsArr[i]);
//     count++;
//   }

//   for (z = 0; z < optionsArr.length; z++) {
//     var choices = optionsArr[z];
//     for (x = 0; x < choices.length; x++) {
//       var btnValue = choices[x];
//       $("#option1").text(choices[0]);
//       $("#option2").text(choices[1]);
//       $("#option3").text(choices[2]);
//       $("#option4").text(choices[3]);
//     }
//   }
//   $(".options").on("click", function(event) {
//     event.preventDefault();
//     console.log(
//       $(this)
//         .val()
//         .trim()
//     );

// if ((e = answerArr[0])) {
//   choices++;
// }
//   });

//   // console.log(triviaObj);
//   // console.log(triviaObj.questions[1]);
//   // console.log(triviaObj.choices[1]);
//   // console.log(triviaObj.answers[1]);
// }); //!End of Document.ready Function //

// function checkIfTrue() {
//     var correctCounter = 0;
//     var q1check = document.getElementById('q1a1');
//     console.log(q1check);
//     if (q1check.checked == '1') {
//         console.log("Answer 1: true");
//         correctCounter++;
//     } else {
//         console.log('Answer 1: false');
//     }

//     var q2check = document.getElementById('q2a2');
//     console.log(q2check);
//     if (q2check.checked == '1') {
//         console.log("Answer 2: true");
//         correctCounter++;
//     } else {
//         console.log('Answer 2: false');
//     }

//     var results = document.getElementById('results');
//     results.innerText = "You scored: " + correctCounter + "/2";
//}
