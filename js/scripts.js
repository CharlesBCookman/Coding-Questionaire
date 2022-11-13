function removeHiddenOne(event) {
  event.preventDefault();
  console.log("Is this working?");
  let showQ1 = document.getElementById("question1");
  showQ1.setAttribute("class", "");
}

function removeHiddenTwo(event) {
  event.preventDefault();
  console.log("Is this working?");
  let showQ2 = document.getElementById("question2");
  showQ2.setAttribute("class", "");
}

function removeHiddenThree(event) {
  event.preventDefault();
  console.log("Is this working?");
  let showQ3 = document.getElementById("question3");
  showQ3.setAttribute("class", "");
}

function removeHiddenFour(event) {
  event.preventDefault();
  console.log("Is this working?");
  let showQ4 = document.getElementById("question4");
  showQ4.setAttribute("class", "");
}

function removeHiddenFive(event) {
  event.preventDefault();
  console.log("Is this working?");
  let showQ5 = document.getElementById("question5");
  showQ5.setAttribute("class", "");
}

function removeHiddenSix(event) {
  event.preventDefault();
  console.log("Is this working?");
  let finalAnswer = document.getElementById("answer");
  finalAnswer.setAttribute("class", "");
  let getName = document.getElementById("name").value;
  document.getElementById("showname").innerText = getName;
  let firstValue = document.getElementsByTagName("input");  let secondValue = 0;
  let returnedValue = "";
  let questionaireResult = firstValue.forEach(element => {
    returnedValue =+ element; 
    let Javascript = parseInt(returnedValue.count("j"));
    let Ruby = parseInt(returnedValue.count("r"));
    let Python = parseInt(returnedValue.count("p"));
    let cLanguage = parseInt(returnedValue.count("c"));
    let largestValue = Math.max() 
    




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
