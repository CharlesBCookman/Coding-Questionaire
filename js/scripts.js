function removeHiddenOne(event) {
  event.preventDefault();
  console.log("is this working")
  const hiddenOne = document.getElementById("questions-area");
  hiddenOne.className = "questions-screen";
}

function removeHiddenTwo(event) {
  event.preventDefault();
  const inputThree = document.getElementById("radio3");
  const labelThree = document.getElementById("label3");
  inputThree.className = "show";
  labelThree.className = "show";
  console.log("is ths working?")
}

function removeHiddenThree(event) {
  event.preventDefault();
  const showAnswerArea = document.getElementById("answer");
  showAnswerArea.className = "show";
}

function showAnswer(event) {
  event.preventDefault();
  let name = document.getElementById("name").innerText;
  const namePlace = document.getElementById("showname");
}


function finalAnswers(event) {
  event.preventDefault();
}

function answersTree(event) {
  event.preventDefault();
  let answer;
  answer = document.querySelector("input[name='radio']:checked").value;
  console.log(answer)
  const questionText = document.getElementById("questions-text").innerText;
  const radioOne = document.getElementById("radio1").value;
  const radioTwo = document.getElementById("radio2").value;
  const radioThree = documen.getElementById("radio3").value;
  const labelOne = getElementById("label1").innertext;
  const labelTwo = getElementById("label2").inntertext;
  const labelThree = getElementById("label3").inntertext;

  function questionTwo() {
    //question2
    radioOne = "q2a1"
    radioTwo = "q2a2"
    radioThree = "q2a3"
    questionText = "2. Which do you prefer:"
    labelOne = "Problem solving and/or logic problems."
    labelTwo = "Beautiful things or things that run smooth?"
    labelThree = "Complex things that require thought and analysis?"
  }
  function questionThree() {
    //questio3
    radioOne = "q3a1";
    radioTwo = "q3a2";
    radioThree = "q3a3";
    questionText = "Which do you prefer:";
    labelOne = "Word/Logic problems/puzzles.";
    labelTwo = "Writing and reading beautiful literature.";
    labelThree = "Analyzing, and/or editing.";
}

  function questionFour() {
    //question4
    radioOne = "q4a1";
    radioTwo = "q4a2";
    radioThree = "q4a3";
    questionText = "When you problem solve, do you…";
    labelOne = "Like a big challenge.";
    labelTwo = "Enjoy thinking through your options.";
    labelThree = "Do it quickly so you can move on to the next one.";
  }

  function questionFive() {
    //question5
    radioOne = "q5a1";
    radioTwo = "q5a2";
    radioThree = "q5a3";
    questionText = "Do you like…";;
    labelOne = "Complex work with contradictions.";
    labelTwo = "Approachable work without ambiguity.";
    labelThree = "Fast paced work with plenty reference material.";
  }

  function questionSix() {
    //question6
    radioOne = "q6a1";
    radioTwo = "q6a2";
    radioThree = "q6a3";
    questionText = "Would you rather…";
    labelOne = "Learn software stuff.";
    labelTwo = "Learn internet stuff.	";
    labelThree = "Learn a lot of stuff.";
  }

  function questionSeven() {
    //question7
    radioOne = "q7a1";
    radioTwo = "q7a2";
    radioThree = "q7a3";
    questionText = "Do you prefer Mac or PC’s";
    labelOne = "Mac";
    labelTwo = "PC’s";
    labelThree = "Both";
  }

  function questionEight() {
    //question8
    radioOne = "q8a1";
    radioTwo = "q8a2";
    radioThree = "q8a3";
    questionText = "Do you prefer tools that…";
    labelOne = "Work really easily and quickly.";
    labelTwo = "Do a lot of things.";
    labelThree = "Are really good at what they do.";
  }

  function questionNine() {
    //question9
    radioOne = "q9a1";
    radioTwo = "q9a2";
    radioThree = "q9a3";
    questionText = "Are you a...";
    labelOne = "Fast paced get it done kinda person.";
    labelTwo = "I like a good challenge I can spend some time on.";
    labelThree = "What ever it is bring it on kinda person.";
  }
  
  function questionTen() {
    //question10
    radioOne = "q10a1";
    radioTwo = "q10a2";
    radioThree = "q10a3";
    questionText = "Would you rather work on…";
    labelOne = "Servers.";
    labelTwo = "Functionality and data analytics kinda stuff.";
    labelThree = "A mix of everything.";
  }

  function questionEleven() {
    //question11
    radioOne = "q11a1";
    radioTwo = "q11a2";
    radioThree = "q11a3";
    questionText = "Would you rather work on…";
    labelOne = "Servers or windows software.";
    labelTwo = "Functionality and data analytics kinda stuff.";
    labelThree = "A mix of everything.";
  }

  function questionTwelve() {
    //question12
    radioOne = "q12a1";
    radioTwo = "q12a2";
    radioThree = "q12a3";
    questionText = "Windows servers and software.";
    labelOne = "Servers or windows software.";
    labelTwo = "Work with servers and build back end functionality.";
    labelThree = "A lot of everything.";
  }

  if(answer = "q1a1"){
      //question2
    removeHiddenTwo;
    questionTwo;
  }
  if(answer = "q1a2"){
    //question3
    removeHiddenTwo;
    questionThree;

    
  }
  if(answer = "q2a1"){
    questionFour;

  }
  if(answer = "q2a2"){

  }
  if(answer = "q2a3"){
    //question6
    questionSix;
  }
  if(answer = "q3a1"){
    //question7
    questionFour;
  }
  if(answer = "q3a2"){
    //question8
    questionFive;
  }
  if(answer = "q3a3"){
    //question9
    questionSix;
  }
  if(answer = "q4a1"){
    questionSeven;
  }
  if(answer = "q4a2"){
    questionEight;
  }
  if(answer = "q4a3"){
    questionNine;
  }
  if(answer = "q5a1"){
    questionSeven;
  }
  if(answer = "q5a2"){
    questionEight;
  }
  if(answer = "q5a3"){
    questionNine;
  }
  if(answer = "q6a1"){
    questionSeven;
  }
  if(answer = "q6a2"){
    questionEight;
  }
  if(answer = "q6a3"){
    questionNine;
  }
  if(answer = "q7a1"){
    questionTen
  }
  if(answer = "q7a2"){
    questionEleven
  }
  if(answer = "q7a3"){
    questionTwelve
  }
  if(answer = "q8a1"){
    questionTen
  }
  if(answer = "q8a2"){
    questionEleven
  }
  if(answer = "q8a3"){
    questionTwelve
  }
  if(answer = "q9a1"){
    questionTen
  }
  if(answer = "q9a2"){
    questionEleven
  }
  if(answer = "q9a3"){
    questionTwelve
  }
  if(answer = "q10a1"){

  }
  if(answer = "q10a2"){

  }  
  if(answer = "q10a3"){

  }
  if(answer = "q11a1"){

  }
  if(answer = "q11a2"){

  }  
  if(answer = "q11a3"){

  }
  if(answer = "q12a1"){

  }
  if(answer = "q12a2"){

  }  
  if(answer = "q12a3"){

  }
  else{
    alert("Something went wrong...")
} }



window.addEventListener("load", function(){
  const startButton = document.getElementById("start");
  startButton.addEventListener("click", removeHiddenOne);
  const nextButton = document.getElementById("next-button");
  nextButton.addEventListener("click", answersTree);
});
