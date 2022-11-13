const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://world-clock.p.rapidapi.com/json/utc/now',
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'world-clock.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

function questionChangeTo(textHere) {
  let questionsText = document.getElementById("questions-text").innertext;
  questionsText = textHere;
}

function changeRadioOne(answerOne) {
  const radioOne = document.getElementById("label1");
  radioOne.checked = false;
  let radioOneText = document.getElementById("label1").innerText;
  radioOneText = answerOne;
}

function changeRadioTwo(answerTwo) {
  const radioTwo = document.getElementById("label2");
  radioTwo.checked = false;
  let radioTwoText = document.getElementById("label2").innerText;
  radioTwoText = answerTwo;
}

function changeRadioThree(answerThree) {
  const radioThree = document.getElementById("label3");
  radioThree.checked = false;
  let radioThreeText = document.getElementById("label3").innerText;
  radioThreeText = answerThree;
}

function removeHiddenOne() {
  const hiddenOne = document.getElementById("questions-area");
  hiddenOne.className("questions-screen");
}

function removeHiddenTwo() {
  const inputThree = document.getElementById("radio3");
  const labelThree = documen.getElementById("label3");
  inputThree.className("show")
  labelThree.className("show")
}

function removeHiddenThree() {
  let showAnswerArea = document.getElementById("answer");
  showAnswerArea.className("show")
}

function finishQuestions() {

}

function questionTwo() {
  removeHiddenTwo
  document.getElementById("radio1").value = "q2a1";
  document.getElementById("radio2").value = "q2a2";
  documen.getElementById("radio3").value = "q2a3";
  questionChangeTo("Which do you prefer:");
  changeRadioOne("Problem solving and/or logic problems.");
  changeRadioTwo("Beautiful things or things that run smooth.");
  changeRadioThree("Complex things that require thought and analysis.");
}

function questionThree() {
  removeHiddenTwo
  document.getElementById("radio1").value = "q3a1";
  document.getElementById("radio2").value = "q3a2";
  documen.getElementById("radio3").value = "q3a3";
  questionChangeTo("Which do you prefer:");
  changeRadioOne("Word/Logic problems/puzzles.");
  changeRadioTwo("Writing and reading beautiful literature.");
  changeRadioThree("Analyzing, and/or editing.");
}

function questionFour() {
  document.getElementById("radio1").value = "q4a1";
  document.getElementById("radio2").value = "q4a2";
  documen.getElementById("radio3").value = "q4a3";
  questionChangeTo("When you problem solve, do you…");
  changeRadioOne("Like a big challenge.");
  changeRadioTwo("Enjoy thinking through your options.");
  changeRadioThree("Do it quickly so you can move on to the next one.");
}

function questionFive() {
  document.getElementById("radio1").value = "q5a1";
  document.getElementById("radio2").value = "q5a2";
  documen.getElementById("radio3").value = "q5a3";
  questionChangeTo("Do you like…");
  changeRadioOne("Complex work with contradictions.");
  changeRadioTwo("Approachable work without ambiguity.");
  changeRadioThree("Fast paced work with plenty reference material.");
}

function questionSix() {
  document.getElementById("radio1").value = "q6a1";
  document.getElementById("radio2").value = "q6a2";
  documen.getElementById("radio3").value = "q6a3";
  questionChangeTo("Would you rather…");
  changeRadioOne("Complex work with contradictions.");
  changeRadioTwo("Approachable work without ambiguity.");
  changeRadioThree("Fast paced work with plenty reference material.");
}

function questionSeven() {
  document.getElementById("radio1").value = "q7a1";
  document.getElementById("radio2").value = "q7a2";
  documen.getElementById("radio3").value = "q7a3";
  questionChangeTo("Do you prefer Mac or PC’s");
  changeRadioOne("Mac");
  changeRadioTwo("PC’s");
  changeRadioThree("Both");
}

function questionEight() {
  document.getElementById("radio1").value = "q8a1";
  document.getElementById("radio2").value = "q8a2";
  documen.getElementById("radio3").value = "q8a3";
  questionChangeTo("Do you prefer tools that…");
  changeRadioOne("Work really easily and quickly.");
  changeRadioTwo("Do a lot of things.");
  changeRadioThree("Are really good at what they do.");
}

function questionNine() {
  document.getElementById("radio1").value = "q9a1";
  document.getElementById("radio2").value = "q9a2";
  documen.getElementById("radio3").value = "q9a3";
  questionChangeTo("Are you a...");
  changeRadioOne("Fast paced get it done kinda person.");
  changeRadioTwo("I like a good challenge I can spend time on.");
  changeRadioThree("Bring it on kinda person.");
}

function questionTen() {
  document.getElementById("radio1").value = "q10a1";
  document.getElementById("radio2").value = "q10a2";
  documen.getElementById("radio3").value = "q10a3";
  questionChangeTo("Would you rather work on…");
  changeRadioOne("Servers.");
  changeRadioTwo("Functionality and data analytics kinda stuff.");
  changeRadioThree("A mix of everything.");
}

function questionEleven() {
  document.getElementById("radio1").value = "q11a1";
  document.getElementById("radio2").value = "q11a2";
  documen.getElementById("radio3").value = "q11a3";
  questionChangeTo("Would you rather work on…");
  changeRadioOne("Servers or windows software.");
  changeRadioTwo("Functionality and data analytics kinda stuff.");
  changeRadioThree("A mix of everything.");
}

function questionTwelve() {
  document.getElementById("radio1").value = "q12a1";
  document.getElementById("radio2").value = "q12a2";
  documen.getElementById("radio3").value = "q12a3";
  questionChangeTo("Would you rather work on…");
  changeRadioOne("Servers or windows software.");
  changeRadioTwo("Work with servers and build back end functionality.");
  changeRadioThree("A lot of everything.");
}

function finalAnswers() {

}

function answersTree() {
  let radios = document.querySelectorAll('input[name="radio"]')
  let answer;
  for (const answer of radios) {
  if (answer.checked) {
  answer = radios.value;
  break;
}}
  if(answer = "q1a1"){
    questionTwo;
  }
  if(answer = "q2a1"){
    questionFour
  }
  if(answer = "q2a2"){
    questionFive;
  }
  if(answer = "q2a3"){
    questionSix;
  }
  if(answer = "q3a1"){
    questionFour;
  }
  if(answer = "q3a2"){
    questionFive;
  }
  if(answer = "q3a3"){
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
  }
} 

window.addEventListener("load", function(){
  const startButton = document.getElementById("start");
  startButton.addEventListener("click", removeHiddenOne);

  const showQuestionTwo = document.getElementById("q1next");
  showQuestionTwo.addEventListener("click", removeHiddenTwo);

  const showQuestionThree = document.getElementById("q2next");
  showQuestionThree.addEventListener("click", removeHiddenThree);

  const showQuestionFour = document.getElementById("q3next");
  showQuestionFour.addEventListener("click", removeHiddenFour);

  const showQuestionFive = document.getElementById("q4next");
  showQuestionFive.addEventListener("click", removeHiddenFive);

  const showQuestionSix = document.getElementById("q5next");
  showQuestionSix.addEventListener("click", removeHiddenSix);
});
