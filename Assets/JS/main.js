
console.log("https://youtu.be/49pYIMygIcU?t=438");

let questions = [
  {
  question: "Which movie did not win an AcadamyAward?",
  src : "http://placeholder/200",
  choice1 : "Forrest Gump",
  choice2 : "Good Will Hunting",
  choice3 : "The Green Mile",
  choice4 : "Pulp Fiction",
  correct : "choice3"
},
{
  question : "Which movie does Will Farrel not appear in?",
  src : "http://placeholder/200",
  choice1 : "Anchorman",
  choice2 : "Old School",
  choice3 : "Lego Movie",
  choice4 : "Anchorman 3",
  correct : "choice4"
},
{
  question : "Which actor was <strong><em>NOT</em></strong> in True Grit?",
  src : "http://placeholder/200",
  choice1 : "Jeff Daniels", 
  choice2 : "John Wayne",
  choice3 : "Matt Damon",
  choice4 : "Sam Elliot",
  correct : "choice4"
},
{
  question : "How many times has Robert DeNiro been nominated for an Oscar?",
  src : "http://placeholder/200",
  choice1 : 1,
  choice2 : 7,
  choice3 : 3,
  choice4 : 5,
  correct : "choice2"
},
{
  question : "How many movies has Samuel L.Jackson appeared in?",
  src : "http://placeholder/200",
  choice1 : 126,
  choice2 : 176,
  choice3 : 156,
  choice4 : 113,
  correct : "choice1"
},
{
  question : "What is Donald Trump's IQ?",
  src : "http://placeholder/200",
  choice1 : "1",
  choice2 : "2",
  choice3 : "3",
  choice4 : "5",
  correct : "choice1"
},
]
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
let questionIndex = questions.length -1;
// Create question iterator //
let runningQuestionIndex;

// Function to render questions in the buttons //
function renderQuestion(){
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
//   const questionsArr = [
//     "Which movie did not win an AcadamyAward?",
//     "Which movie does Will Farrel not appear in?",
//     "Which actor was NOT in True Grit?",
//     "How many times has Robert DeNiro been nominated for an Oscar?",
//     "How many movies has Samuel L.Jackson appeared in?",
//     "What is Donald Trump's IQ?",
//     "Who scored the most points in NBA history ?",
//     "How many World Series have the Kansas City Royals participated in?",
//     "Who has won more Championships?",
//     "Which country has won the most world cups ?",
//     "How long does it take for the Moon to orbit the Earth?",
//     "How many elements are on the Periodic Table of Elements?",
//     "What is the average age of a community college student?",
//     "How many countries are there in the world?",
//     "How many languages are spoken in the world?",
//     "What is the most popular dog breed in America?",
//     "Which beer has the highest sales?",
//     "Which is the most popular Surname in the world?",
//     "Who is Satoshi Nakamoto?",
//     "What is the highest selling game console of all time?"
//   ];
//   var question1 = questionsArr[0];

//   const optionsArr = [
//     ["Forrest Gump", "Good Will Hunting", "The Green Mile", "Pulp Fiction"],
//     ["Anchorman", "Old School", "Lego Movie", "Anchorman 3"],
//     ["Jeff Daniels", "John Wayne", "Matt Damon", "Sam Elliot"],
//     ["1", "7", "3", "5"],
//     ["126", "176", "156", "113"],
//     ["1", "2", "3", "5"],
//     [
//       "Kareem Abdul Jabar",
//       "Oscar Robinson",
//       "Michael Jordan",
//       "Shaquille O'Neal"
//     ],
//     ["7", "2", "5", "4"],
//     ["Tom Brady", "Yogi Berra", "Michael Jordan", "Wayne Gretzke"],
//     ["Brazil", "Germany", "Spain", "France"],
//     ["27 Days", "9 Months", "6 Months", "14 Days"],
//     ["118", "64", "127", "32"],
//     ["29", "19", "22", "25"],
//     ["212", "195", "334", "7"],
//     ["2562", "-&gt; 6500", "-& lt; 2000", "-& lt; 1000"],
//     ["Labradore", "German Sheppard", "Golden Retriever", "French Bulldogs"],
//     ["Yanjing", "Coors Light", "Corona", "Tsingtao *"],
//     ["Jones", "Wang", "Johnson", "Nguyen"],
//     [
//       "A famous monk in Japan",
//       "The purple Teenage Mutant Ninja Turtle",
//       "The founder of cryptocurrency",
//       "The first samouri"
//     ],
//     ["PlayStation", "Nintendo 64", "XBox One", "Playstation 2"]
//   ];
//   console.log(optionsArr[0][0]); //Prints Forest Gump

//   const answerArr = [
//     "The Green Mile",
//     "Anchorman 3",
//     "Sam Elliot",
//     "7",
//     "126",
//     "1",
//     "Kareem Abdul Jabar",
//     "4",
//     "Yogi Berra",
//     "Brazil",
//     "27 Days",
//     "118",
//     "29",
//     "195",
//     "-&gt; 6500",
//     "Labradore",
//     "Tsingtao",
//     "Wang",
//     "The founder of cryptocurrency",
//     "Playstation 2"
//   ];
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
// }); //End of Document.ready Function //
/*
Category 1: Movies
Q: Which movie did not win an Acadamy Award ?
["Forrest Gump" , "Good Will Hunting" , "The Green Mile *" , "Pulp Fiction"]

Q: Which movie does Will Farrel not appear in?
["Anchorman" , "Old School" , "Lego Movie" , "Anchorman 3 *"]

Q: Which actor was NOT in True Grit ?
["Jeff Daniels", "John Wayne" , "Matt Damon" , "Sam Elliot *"]

Q: How many times has Robert DeNiro been nominated for an Oscar ?
["1" , "7 *" , "3" , "5"]

Q: How many movies has Samuel L.Jackson appeared in?
["126 *" , "176" , "156" , "113"]


Q: What is Donald Trump's IQ?
["1*" , "2" , "3" , "5"]


// Q: Who scored the most points in NBA history ?
["Kareem Abdul Jabar *", "Oscar Robinson" , "Michael Jordan" , "Shaquille O\'Neal"]

Q: How many World Series have the Kansas City Royals participated in?
["7" , "2" , "5" , "4*"]

Q: Who has won more Championships ?
["Tom Brady" , "Yogi Berra *" , "Michael Jordan" , "Wayne Gretzke"]

Q: Which country has won the most world cups ?
["Brazil" , "Germany" , "Spain" , "France"]

Category: Random
Q: How long does it take for the Moon to orbit the Earth ?
["27 Days *" , "9 Months" , "6 Months" , "14 Days"]

Q: How many elements are on the Periodic Table of Elements ?
["118 *" , "64" , "127" , "32"]

Q: What is the average age of a community college student ?
["29 *" , "19" , "22" , "25"]

Q: How many countries are there in the world ?
["212" , "195*" , "334" , "7"]

Q: How many languages are spoken in the world ?
["2562" , "-&gt; 6500 *" , "-& lt; 2000" , "-& lt; 1000"]

Q: What is the most popular dog breed in America ?
 ["Labradore*" , "German Sheppard" , "Golden Retriever" , "French Bulldogs"]

Q: Which beer has the highest sales ?
["Yanjing" , "Coors Light" , "Corona" , "Tsingtao *"]

Q: Which is the most popular Surname ?
    ["Jones", "Wang *", "Johnson", "Nguyen"]

Q: Who is Satoshi Nakamoto ?
["A famous monk in Japan" , "The purple Teenage Mutant Ninja Turtle", "The founder of cryptocurrency", "The first samouri"]

Q: What is the highest selling game console of all time ?
    ["PlayStation" , "Nintendo 64", "XBox One" , "Playstation 2*"]
*/

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
