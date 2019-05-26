console.log("https://youtu.be/49pYIMygIcU?t=438");

const questionsArr = [
  {
    question: "Which movie did not win an AcadamyAward?",
    src: "./Assets/Images/TheGreenMile.jpg",
    choice1: "Forrest Gump",
    choice2: "Good Will Hunting",
    choice3: "The Green Mile",
    choice4: "Pulp Fiction",
    correct: "The Green Mile"
  },
  {
    question: "Which movie does Will Farrel not appear in?",
    src: "./Assets/Images/AnchorMan3.jpg",
    choice1: "Anchorman",
    choice2: "Old School",
    choice3: "Lego Movie",
    choice4: "Anchorman 3",
    correct: "Anchorman 3"
  },
  {
    question: "Which actor was <strong><em>NOT</em></strong> in True Grit?",
    src: "./Assets/Images/SamElliot.jpg",
    choice1: "Jeff Daniels",
    choice2: "John Wayne",
    choice3: "Matt Damon",
    choice4: "Sam Elliot",
    correct: "Sam Elliot"
  },
  {
    question: "How many times has Robert DeNiro been nominated for an Oscar?",
    src: "./Assets/Images/RobertDeNiro.jpg",
    choice1: "1",
    choice2: "7",
    choice3: "3",
    choice4: "5",
    correct: "7"
  },
  {
    question: "How many movies has Samuel L.Jackson appeared in?",
    src: "./Assets/Images/MaceWindus.jpg",
    choice1: "126",
    choice2: "176",
    choice3: "156",
    choice4: "113",
    correct: "126"
  },
  {
    question: "What is Donald Trump's IQ?",
    src: "./Assets/Images/Trump.png",
    choice1: "1",
    choice2: "2",
    choice3: "3",
    choice4: "5",
    correct: "1"
  },
  {
    question: "Who scored the most points in NBA history?",
    src: "./Assets/Images/Kareem.jpeg",
    choice1: "Shaquille O'Neal",
    choice2: "Michael Jordan",
    choice3: "Kareem Abdul Jabar",
    choice4: "Oscar Robinson",
    correct: "Shaquille O'Neal"
  },
  {
    question:
      "How many World Series have the Kansas City Royals participated in?",
    src: "./Assets/Images/Royals.jpg",
    choice1: "7",
    choice2: "2",
    choice3: "5",
    choice4: "4",
    correct: "4"
  },
  {
    question: "Who has won more Championships?",
    src: "./Assets/Images/Yogi.jpg",
    choice1: "Tom Brady",
    choice2: "Yogi Berra",
    choice3: "Michael Jordan",
    choice4: "Wayne Gretzke",
    correct: "Yogi Berra"
  },
  {
    question: "Which country has won the most world cups?",
    src: "./Assets/Images/Brazil.jpg",
    choice1: "Brazil",
    choice2: "Germany",
    choice3: "Spain",
    choice4: "France",
    correct: "Brazil"
  },
  {
    question: "How long does it take for the Moon to orbit the Earth?",
    src: "./Assets/Images/Moon.jpg",
    choice1: "6 Months",
    choice2: "9 Months",
    choice3: "27 Days",
    choice4: "14 Days",
    correct: "27 Days"
  },
  {
    question: "How many elements are on the Periodic Table of Elements?",
    src: "./Assets/Images/PeriodicTable.jpg",
    choice1: "118",
    choice2: "64",
    choice3: "127",
    choice4: "32",
    correct: "118"
  },
  {
    question: "What is the average age of a community college student?",
    src: "./Assets/Images/CommunityCollege.jpg",
    choice1: "19",
    choice2: "29",
    choice3: "22",
    choice4: "25",
    correct: "29"
  },
  {
    question: "How many countries are there in the world?",
    src: "./Assets/Images/WorldMap.png",
    choice1: "212",
    choice2: "195",
    choice3: "334",
    choice4: "7",
    correct: "195"
  },
  {
    question: "How many languages are spoken in the world?",
    src: "./Assets/Images/Languages.png",
    choice1: "2562",
    choice2: "-& lt; 1000",
    choice3: "-& lt; 2000",
    choice4: "-&gt; 6500",
    correct: "-&gt; 6500"
  },
  {
    question: "What is the most popular dog breed in America?",
    src: "./Assets/Images/Lab.jpg",
    choice1: "Labradore",
    choice2: "German Sheppard",
    choice3: "Golden Retriever",
    choice4: "French Bulldogs",
    correct: "Labradore"
  },
  {
    question: "Which beer has the highest sales?",
    src: "./Assets/Images/Beer.jpg",
    choice1: "Yanjing",
    choice2: "Coors Light",
    choice3: "Corona",
    choice4: "Tsingtao",
    correct: "Tsingtao"
  },
  {
    question: "Which is the most popular Surname in the world?",
    src: "./Assets/Images/wang.png",
    choice1: "Jones",
    choice2: "Wang",
    choice3: "Johnson",
    choice4: "Nguyen",
    correct: "Wang"
  },
  {
    question: "Who is Satoshi Nakamoto?",
    src: "./Assets/Images/Satoshi.jpeg",
    choice1: "A famous monk in Japan",
    choice2: "The purple Teenage Mutant Ninja Turtle",
    choice3: "The team of developers from India that created Bitcoin",
    choice4: "The first samouri",
    correct: "The team of developers from India that created Bitcoin"
  },
  {
    question: "What is the highest selling game console of all time?",
    src: "./Assets/Images/PlayStation2.jpg",
    choice1: "PlayStation",
    choice2: "Nintendo 64",
    choice3: "XBox One",
    choice4: "Playstation 2",
    correct: "Playstation 2"
  }
];

// Making Variables for all elements that need to be munipulated //
const start = $("#start");
const reset = $("<button id='reset' type='Select' class='btn btn-light btn-lg'>"+ "Try Again?" + "</button>");
const timeLeft = $("#clock");
const questionImg = $("#questionImg");
const question = $("#question");
const counter = $("#counter");
const choices = $("#choices-div");
const choice1 = $("#choice1");
const choice2 = $("#choice2");
const choice3 = $("#choice3");
const choice4 = $("#choice4");
const score = $(".score");
const userInput = [];
const countStartNumber = 5;


let game = {

  questions : questionsArr,
  questionIndex: 0,
  counter: countStartNumber,
  correct: 0,
  incorrect: 0,

  // create a function to decrement the timer //
  countdown: () => {
    game.counter--;
    // display the countdown numbers in the counter div//
    counter.text(game.counter);
    // What happens when the time is up?//
    if (game.counter === 0) {
      console.log("TIME UP");
      // run the timeUp();//
      game.timeUp();
    }
  },

  loadQuestion: () => {
    // Reset the timer to 30 sec for every question //
    timer = setInterval(game.countdown, 1000);
    question.text(questionsArr[game.questionIndex].question);
    choice1.text(questionsArr[game.questionIndex].choice1);
    choice2.text(questionsArr[game.questionIndex].choice2);
    choice3.text(questionsArr[game.questionIndex].choice3);
    choice4.text(questionsArr[game.questionIndex].choice4);

  },
      
  nextQuestion: () => {
    game.counter = countStartNumber;
    counter.text(game.counter);
    game.questionIndex++;
    game.loadQuestion();
  },

    timeUp: () => {
      clearInterval(timer);
      counter.text(game.counter);
      question.html("<h3>The Correct Answer Was : " + questionsArr[game.questionIndex].correct + "</h3>");
      questionImg.append("<img height='300' width='500' src='" + questionsArr[game.questionIndex].src + "' />");
      counter.text("Out of Time");

      if (game.questionIndex === questionsArr.length -1) {
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    results: () => {
      clearInterval(timer);
      // Title of the score Div// 
      score.html("<h3>Here's How you did</h3>");
      //Display the counter //
      counter.text(game.counter);
      // Show user Correct Answers //
      score.append("<h3>Correct Answers: " + game.correct + "</h3>");
      // Show user Incorrect Answers //
      score.append("<h3>Incorrect Anwers: " + game.incorrect + "</h3>");
      // Appending the reset button to the bottom of the score div so the user can try again//
      score.append(reset);

    },
    // I got this from one of the solution files.  It saved me a ton of time//
    clicked: (e) => {
      clearInterval(timer);
      if($(e.target).attr("data-name") === questionsArr[game.questionIndex].correct) {
        this.answeredCorrect();
      }else {
        this.answeredWrong();
      }
    },

    answeredWrong: () => {
      game.incorrect++;
      clearInterval(timer);
      // Untested Code //
      question.text("Nope!");
      question.html("<h3>The Correct Answer Was : " + questionsArr[game.questionIndex].correct + "</h3>");
      questionImg.append("<img height='300' width='500' src='" + questionsArr[game.questionIndex].src + "' />");
      // If there are no more questions in the arr Show Results in 3 seconds
      if(game.questionIndex === questionsArr.length -1) {
        setTimeout(game.results, 3 * 1000);
        // If we have less than QuestionArr.length = show the next question in 3 seconds
      }else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    //What happens if the user pics the correct answer //
    answeredCorrect: () => {
      clearInterval(timer);
      game.correct++;

      question.text("Correct");
      questionImg.append("<img height='300' width='500' src='" + questionsArr[game.questionIndex].src + "' />")

      if (game.questionIndex === questionsArr.length -1) {
        setTimeout(game.results, 3 * 1000);
      } else {
        setTimeout(game.nextQuestion, 3 * 1000);
      }
    },

    reset: () => {
      // Reset the Question Index
      this.questionIndex = 0;
      // Reset the counter to 0;
      this.counter = countStartNumber;
      // Reset the correct guesses to 0;
      this.correct = 0;
      // Reset the incorrect guesses to 0;
      this.incorrect = 0;
      // Load the first question -- reset questionIndex to 0 
      this.loadQuestion();
    }
  };  // End of Game Function
      
$(document).on("click", "start", () => {
  game.reset();
});

$(document).on("click", "")



