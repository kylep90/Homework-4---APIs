var startButton = document.getElementById("start")
var questionSection = document.getElementById("questions")
var answerSection = document.getElementById("answers")
var body = document.getElementById("body")
var answerbutton = document.createElement("button")
var timer = document.getElementById("timer")
var q = 0;
var a = 0;
var timeLeft = 60;
var score = 0;
var timeInterval;

//Setting Timer
timer.setAttribute("style", "text-align:right");
timer.textContent = timeLeft + "seconds left";

//Questions
var questions = [
    q1 = "Where is Wales?",
    q2 = "What is the capital of Wales?",
    q3 = "Who is Sir Tom Jones?",
    q4 = "Who is the Saint of Wales?",
    q5 = "The Welsh flag is the best because it has what on it?"
]

//Answers
var answers =  [
    a1 = ["In England", "In Spain", "In the UK", "Mars", "In the UK"],
    a2 = ["London", "Dublin", "Cardiff", "Manchester", "Cardiff"],
    a3 = ["Singer", "Actor", "Football Player", "Astronaut", "Singer"],
    a4 = ["George", "Andrew", "Patrick", "David", "David"],
    a5 = ["Sheep", "Dragon", "Leek", "Tom Jones", "Dragon"]
]

//Runs through arrays everytime an answer is pressed. Repeats until
//all questions have been shown.
function newQuestion(){
    if(q < 5){
        body.textContent = questions[q];
        answerSection.textContent = "";
            for( var i = 0; i<4; i++){
               var answerbutton = document.createElement("button");
                      answerbutton.setAttribute("class", "btn btn-primary");
                      answerbutton.setAttribute("id", i);
                      answerbutton.textContent = answers[a][i];
                  answerSection.append(answerbutton)}
                  console.log(q);
                  q++;
                  a++;
                  console.log(q);}
                  else{
                      alert("End Game")
                      finalScore();

                  }
      }
      
//Starts the Quiz
startButton.addEventListener("click", function(){
   timeInterval =  setInterval( function(){
                    timeLeft--;
                    timer.textContent = (timeLeft + "seconds left")
                    }, 1000);
    newQuestion()
})

//Checks if it is the correct answer by comparing it to the 
//4th string in the array.
answerSection.addEventListener("click", function(event){      //Question 1
    if(event.target.textContent == answers[(a-1)][4]){
    score += timeLeft
    alert("Correct Answer! You your score is now: " + score);
    
}
    else{
        timeLeft = timeLeft - 15;
        alert("wrong")
    }
    newQuestion();
})

//Runs
function finalScore(){
    console.log("Hello")
    clearInterval(timeInterval);
    body.textContent = "";
    answerSection.textContent = "";
    var username = prompt("What is your name: ")
    body.textContent = username + ", your final score is " + score + "points"
    
}
 
function restartGame(){
    console.log("Restart")
}
