console.log("https://youtu.be/49pYIMygIcU?t=438");

const questionsArr = [
  {
    question: "Which movie did not win an AcadamyAward?",
    src: "./Assets/Images/TheGreenMile.jpg",
    choice1: "Forrest Gump",
    choice2: "Good Will Hunting",
    choice3: "The Green Mile",
    choice4: "Pulp Fiction",
    correct: "choice3"
  },
  {
    question: "Which movie does Will Farrel not appear in?",
    src: "./Assets/Images/AnchorMan3.jpg",
    choice1: "Anchorman",
    choice2: "Old School",
    choice3: "Lego Movie",
    choice4: "Anchorman 3",
    correct: "choice4"
  },
  {
    question: "Which actor was <strong><em>NOT</em></strong> in True Grit?",
    src: "./Assets/Images/SamElliot.jpg",
    choice1: "Jeff Daniels",
    choice2: "John Wayne",
    choice3: "Matt Damon",
    choice4: "Sam Elliot",
    correct: "choice4"
  },
  {
    question: "How many times has Robert DeNiro been nominated for an Oscar?",
    src: "./Assets/Images/RobertDeNiro.jpg",
    choice1: "1",
    choice2: "7",
    choice3: "3",
    choice4: "5",
    correct: "choice2"
  },
  {
    question: "How many movies has Samuel L.Jackson appeared in?",
    src: "./Assets/Images/MaceWindus.jpg",
    choice1: "126",
    choice2: "176",
    choice3: "156",
    choice4: "113",
    correct: "choice1"
  },
  {
    question: "What is Donald Trump's IQ?",
    src: "./Assets/Images/Trump.png",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "5",
    correct: "choice1"
  },
  {
    question: "Who scored the most points in NBA history?",
    src: "./Assets/Images/Kareem.jpeg",
    choice1: "Shaquille O'Neal",
    choice2: "Michael Jordan",
    choice3: "Kareem Abdul Jabar",
    choice4: "Oscar Robinson",
    correct: "choice1"
  },
  {
    question:
      "How many World Series have the Kansas City Royals participated in?",
    src: "./Assets/Images/Royals.jpg",
    choice1: "7",
    choice2: "2",
    choice3: "5",
    choice4: "4",
    correct: "choice4"
  },
  {
    question: "Who has won more Championships?",
    src: "./Assets/Images/Yogi.jpg",
    choice1: "Tom Brady",
    choice2: "Yogi Berra",
    choice3: "Michael Jordan",
    choice4: "Wayne Gretzke",
    correct: "choice2"
  },
  {
    question: "Which country has won the most world cups?",
    src: "./Assets/Images/Brazil.jpg",
    choice1: "Brazil",
    choice2: "Germany",
    choice3: "Spain",
    choice4: "France",
    correct: "choice1"
  },
  {
    question: "How long does it take for the Moon to orbit the Earth?",
    src: "./Assets/Images/Moon.jpg",
    choice1: "6 Months",
    choice2: "9 Months",
    choice3: "27 Days",
    choice4: "14 Days",
    correct: "choice3"
  },
  {
    question: "How many elements are on the Periodic Table of Elements?",
    src: "./Assets/Images/PeriodicTable.jpg",
    choice1: "118",
    choice2: "64",
    choice3: "127",
    choice4: "32",
    correct: "choice1"
  },
  {
    question: "What is the average age of a community college student?",
    src: "./Assets/Images/CommunityCollege.jpg",
    choice1: "19",
    choice2: "29",
    choice3: "22",
    choice4: "25",
    correct: "choice2"
  },
  {
    question: "How many countries are there in the world?",
    src: "./Assets/Images/WorldMap.png",
    choice1: "212",
    choice2: "195",
    choice3: "334",
    choice4: "7",
    correct: "choice2"
  },
  {
    question: "How many languages are spoken in the world?",
    src: "./Assets/Images/Languages.png",
    choice1: "2562",
    choice2: "-& lt; 1000",
    choice3: "-& lt; 2000",
    choice4: "-&gt; 6500",
    correct: "choice4"
  },
  {
    question: "What is the most popular dog breed in America?",
    src: "./Assets/Images/Lab.jpg",
    choice1: "Labradore",
    choice2: "German Sheppard",
    choice3: "Golden Retriever",
    choice4: "French Bulldogs",
    correct: "choice1"
  },
  {
    question: "Which beer has the highest sales?",
    src: "./Assets/Images/Beer.jpg",
    choice1: "Yanjing",
    choice2: "Coors Light",
    choice3: "Corona",
    choice4: "Tsingtao",
    correct: "choice4"
  },
  {
    question: "Which is the most popular Surname in the world?",
    src: "./Assets/Images/wang.png",
    choice1: "Jones",
    choice2: "Wang",
    choice3: "Johnson",
    choice4: "Nguyen",
    correct: "choice2"
  },
  {
    question: "Who is Satoshi Nakamoto?",
    src: "./Assets/Images/Satoshi.jpeg",
    choice1: "A famous monk in Japan",
    choice2: "The purple Teenage Mutant Ninja Turtle",
    choice3: "The team of developers from India that created Bitcoin",
    choice4: "The first samouri",
    correct: "choice3"
  },
  {
    question: "What is the highest selling game console of all time?",
    src: "./Assets/Images/PlayStation2.jpg",
    choice1: "PlayStation",
    choice2: "Nintendo 64",
    choice3: "XBox One",
    choice4: "Playstation 2",
    correct: "choice4"
  }
];

// Making Variables for all elements that need to be munipulated //
const start = $("#start");
const reset = $("#reset");
const timeLeft = $("#clock");
const questionImg = $("#questionImg");
const question = $("#question");
const counter = $("#counter");
const choices = $("#choices-div");
const choice1 = $("#choice1");
const choice2 = $("#choice2");
const choice3 = $("#choice3");
const choice4 = $("#choice4");
const userInput = [];
const countStartNumber = 30;

let timer;

let game = {
  questions: questionsArr,
  currentQuestion: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  start: () => {
    $(start).on("click", () => {
      $(timeLeft).show();
      $(counter).show();
      $(choices).show();
      game.renderQuestion;
    });
  },

  countdown: () => {
    game.counter--;
    $(counter).text(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.timeUp();
    }
  },

  // Function to render questions in the buttons //
  renderQuestion: () => {
    timer = setInterval(game.countdown, 1000);
    let currentQuestion = questionsArr[this.currentQuestion].question;
    for (let i = 0; i < questionsArr[this.currentQuestion].length; i++) {
      console.log(currentQuestion);
      $(question).text(currentQuestion.question);
      $(questionImg).text(currentQuestion.src);
      $(choice1).text(currentQuestion.choice1);
      $(choice2).text(currentQuestion.choice2);
      $(choice3).text(currentQuestion.choice3);
      $(choice4).text(currentQuestion.choice4);
      console.log(questionsArr[i].question);
      console.log(questionsArr[i].src);
      console.log(questionsArr[i].choice1);
      console.log(questionsArr[i].choice2);
      console.log(questionsArr[i].choice3);
      console.log(questionsArr[i].correct);
    }
  },
  nextQuestion: () => {
    game.counter = countStartNumber;
  }
}; //! Closing Brace for Game() //

// End game when the for loop gets to the last question arr //
let questionIndex = questionsArr.length - 1;
// Create question iterator //
let runningQuestionIndex;

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
