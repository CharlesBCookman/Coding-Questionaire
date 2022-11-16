function questionOne() {
  const answerValue1 = document.querySelector("input[name='q1radio']:checked").value;
  const hiddenOne = document.getElementById("question1area");
  const hiddenTwo = document.getElementById("question2area");
  const hiddenThree = document.getElementById("question3area");
  console.log(answerValue1);
  if(answerValue1 === "q1a1"){
    //option1
    console.log("is q1a1 working");
    hiddenOne.className = "hidden1";
    hiddenTwo.className = "show";
  }

  if(answerValue1 === "q1a2"){
    //option2
    console.log("is q1a2 working");
    hiddenOne.className = "hidden1";
    hiddenThree.className = "show";
  } else {
    console.log("questionOne broken");
  }
}

function questionTwo() {
  const answerValue2 = document.querySelector("input[name='q2radio']:checked").value;
  const hiddenTwo = document.getElementById("question2area");
  const hiddenFour = document.getElementById("question4area");
  const hiddenFive = document.getElementById("question5area");
  const hiddenSix = document.getElementById("question6area");
  if(answerValue2 === "q2a1"){
    //option3
    console.log("is q2a1 working");
    hiddenTwo.className = "hidden2";
    hiddenFour.className = "show";
  }

  if(answerValue2 === "q2a2"){
    //option5
    console.log("is q2a2 working");
    hiddenTwo.className = "hidden2";
    hiddenFive.className = "show";
  }

  if(answerValue2 === "q2a3"){
    //option6
    console.log("is q2a3 working");
    hiddenTwo.className = "hidden2";
    hiddenSix.className = "show";
  }
};

function questionThree() {
  const answerValue3 = document.querySelector("input[name='q3radio']:checked").value;
  const hiddenThree = document.getElementById("question3area");
  const hiddenFour = document.getElementById("question4area");
  const hiddenFive = document.getElementById("question5area");
  const hiddenSix = document.getElementById("question6area");
  if(answerValue3 === "q3a1"){
    //option7
    console.log("is q3a1 working");
    hiddenThree.className = "hidden3";
    hiddenFour.className = "show";
  }

  if(answerValue3 === "q3a2"){
    //option8
    console.log("is q3a2 working");
    hiddenThree.className = "hidden3";
    hiddenFive.className = "show";
  }

  if(answerValue3 === "q3a3"){
    //option9
    console.log("is q3a3 working");
    hiddenThree.className = "hidden3";
    hiddenSix.className = "show";
  } else {
    console.log("questionThree broken");
  }

}

function questionFour() {
  const answerValue4 = document.querySelector("input[name='q4radio']:checked").value;
  const hiddenFour = document.getElementById("question4area");
  const hiddenSeven = document.getElementById("question7area");
  const hiddenEight = document.getElementById("question8area");
  const hiddenNine = document.getElementById("question9area");
  if(answerValue4 === "q4a1"){
    //option10
    console.log("is q4a1 working");
    hiddenFour.className = "hidden4";
    hiddenSeven.className = "show";
  }

  if(answerValue4 === "q4a2"){
    //option11
    console.log("is q4a2 working");
    hiddenFour.className = "hidden4";
    hiddenEight.className = "show";
  }

  if(answerValue4 === "q4a3"){
    //option12
    console.log("is q4a3 working");
    hiddenFour.className = "hidden4";
    hiddenNine.className = "show";
  }


}

function questionFive() {
  const answerValue5 = document.querySelector("input[name='q5radio']:checked").value;
  const hiddenFive = document.getElementById("question5area");
  const hiddenSeven = document.getElementById("question7area");
  const hiddenEight = document.getElementById("question8area");
  const hiddenNine = document.getElementById("question9area");

  if(answerValue5 === "q5a1"){
    //option13
    console.log("is q5a1 working");
    hiddenFive.className = "hidden5";
    hiddenSeven.className = "show";
  }

  if(answerValue5 === "q5a2"){
    //option14
    console.log("is q5a2 working");
    hiddenFive.className = "hidden5";
    hiddenEight.className = "show";
  }

  if(answerValue5 === "q5a3"){
    //option15
    console.log("is q5a3 working");
    hiddenFive.className = "hidden5";
    hiddenNine.className = "show";
  }


}

function questionSix() {
  const answerValue6 = document.querySelector("input[name='q6radio']:checked").value;
  const hiddenSix = document.getElementById("question6area");
  const hiddenSeven = document.getElementById("question7area");
  const hiddenEight = document.getElementById("question8area");
  const hiddenNine = document.getElementById("question9area");
  if(answerValue6 === "q6a1"){
    //option16
    console.log("is q6a1 working");
    hiddenSix.className = "hidden6";
    hiddenSeven.className = "show";
  }

  if(answerValue6 === "q6a2"){
    //option17
    console.log("is q6a2 working");
    hiddenSix.className = "hidden6";
    hiddenEight.className = "show";
  }

  if(answerValue6 === "q6a3"){
    //option18
    console.log("is q6a3 working");
    hiddenSix.className = "hidden6";
    hiddenNine.className = "show";
  }
}
function questionSeven() {
  const answerValue7 = document.querySelector("input[name='q7radio']:checked").value;
  const hiddenSeven = document.getElementById("question7area");
  const hiddenTen = document.getElementById("question10area");
  const hiddenEleven = document.getElementById("question11area");
  const hiddenTwelve = document.getElementById("question12area");

  if(answerValue7 === "q7a1"){
    //option19
    console.log("is q7a1 working");
    hiddenSeven.className = "hidden7";
    hiddenTen.className = "show";
  }

  if(answerValue7 === "q7a2"){
    //option20
    console.log("is q7a2 working");
    hiddenSeven.className = "hidden7";
    hiddenEleven.className = "show";
  }

  if(answerValue7 === "q7a3"){
    //option21
    console.log("is q7a3 working");
    hiddenSeven.className = "hidden7";
    hiddenTwelve.className = "show";
  }

}

function questionEight() {
  const hiddenEight = document.getElementById("question8area");
  const hiddenTen = document.getElementById("question10area");
  const hiddenEleven = document.getElementById("question11area");
  const hiddenTwelve = document.getElementById("question12area");
  const answerValue8 = document.querySelector("input[name='q8radio']:checked").value;
  if(answerValue8 === "q8a1"){
    //option22
    console.log("is q8a1 working");
    hiddenEight.className = "hidden8";
    hiddenTen.className = "show";
  }

  if(answerValue8 === "q8a2"){
    //option23
    console.log("is q8a2 working");
    hiddenEight.className = "hidden8";
    hiddenEleven.className = "show";
  }

  if(answerValue8 === "q8a3"){
    //option24
    console.log("is q8a3 working");
    hiddenEight.className = "hidden8";
    hiddenTwelve.className = "show";
  }

}

function questionNine() {
  const answerValue9 = document.querySelector("input[name='q9radio']:checked").value;
  const hiddenNine = document.getElementById("question9area");
  const hiddenTen = document.getElementById("question10area");
  const hiddenEleven = document.getElementById("question11area");
  const hiddenTwelve = document.getElementById("question12area");
  if(answerValue9 === "q9a1"){
    //option25
    console.log("is q9a1 working");
    hiddenNine.className = "hidden9";
    hiddenTen.className = "show";
 }

  if(answerValue9 === "q9a2"){
    //option26
    console.log("is q9a2 working");
    hiddenNine.className = "hidden9";
    hiddenEleven.className = "show";
 }

  if(answerValue9 === "q9a3"){
    //option27
    console.log("is q9a3 working");
    hiddenNine.className = "hidden9";
    hiddenTwelve.className = "show";
 }

}

function questionTen() {
  const answerValue10 = document.querySelector("input[name='q10radio']:checked").value;
  const finalAnswer = document.getElementById("showanswer");
  const hiddenTen = document.getElementById("question10area");
  const hiddenThirteen = document.getElementById("answer");
  const name = document.getElementById("name");
  const nameDisplay = document.getElementById("showname");
  if(answerValue10 === "q10a1"){
    finalAnswer.innerText = "Ruby";
    console.log("is q10a1 working");
    hiddenTen.className = "hidden10";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }

  if(answerValue10 === "q10a2"){
    finalAnswer.innerText = "Python";
    console.log("is q10a2 working");
    hiddenTen.className = "hidden10";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }  

  if(answerValue10 === "q10a3"){
    finalAnswer.innerText = "JavaScript";
    console.log("is q10a3 working");
    hiddenTen.className = "hidden10";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }
}

function questionEleven() {
  const answerValue11 = document.querySelector("input[name='q11radio']:checked").value;
  const finalAnswer = document.getElementById("showanswer");
  const hiddenEleven = document.getElementById("question11area");
  const hiddenThirteen = document.getElementById("answer");
  const name = document.getElementById("name");
  const nameDisplay = document.getElementById("showname");
  if(answerValue11 === "q11a1"){
    finalAnswer.innerText = "C#";
    console.log("is q11a1 working");
    hiddenEleven.className = "hidden11";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }

  if(answerValue11 === "q11a2"){
    finalAnswer.innerText = "Python";
    console.log("is q11a2 working");
    hiddenEleven.className = "hidden11";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }  

  if(answerValue11 === "q11a3"){
    finalAnswer.innerText = "JavaScript";
    console.log("is q11a3 working");
    hiddenEleven.className = "hidden11";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }

}

function questionTwelve() {
  const answerValue12 = document.querySelector("input[name='q12radio']:checked").value;
  const finalAnswer = document.getElementById("showanswer");
  const hiddenTwelve = document.getElementById("question12area");
  const hiddenThirteen = document.getElementById("answer");
  const name = document.getElementById("name");
  const nameDisplay = document.getElementById("showname");
  if(answerValue12 === "q12a1"){
    finalAnswer.innerText = "C#";
    console.log("is q12a1 working");
    hiddenTwelve.className = "hidden12";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }
  if(answerValue12 === "q12a2"){
    finalAnswer.innerText = "Python";
    console.log("is q12a2 working");
    hiddenTwelve.className = "hidden12";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }  
  if(answerValue12 === "q12a3"){
    finalAnswer.innerText = "JavaScript";
    console.log("is q12a3 working");
    hiddenTwelve.className = "hidden12";
    hiddenThirteen.className = "show";
    nameDisplay.innerText = name.value;
  }
}

function reset() {
  const hiddenOne = document.getElementById("question1area");
  const hiddenThirteen = document.getElementById("answer");
  const nameQuestion = document.getElementById("name-question");
  nameQuestion.className = "show";
  hiddenOne.className = "hidden1";
  hiddenThirteen.className = "hidden13";
}

window.addEventListener("load", function(){
  const hiddenOne = document.getElementById("question1area");
  const next1Button = document.getElementById("next1button");
  const next2Button = document.getElementById("next2button");
  const next3Button = document.getElementById("next3button");
  const next4Button = document.getElementById("next4button");
  const next5Button = document.getElementById("next5button");
  const next6Button = document.getElementById("next6button");
  const next7Button = document.getElementById("next7button");
  const next8Button = document.getElementById("next8button");
  const next9Button = document.getElementById("next9button");
  const next10Button = document.getElementById("next10button");
  const next11Button = document.getElementById("next11button");
  const next12Button = document.getElementById("next12button");
  const startButton = document.getElementById("start");
  const nameQuestion = document.getElementById("name-question");
  const resetButton = document.getElementById("reset");
  function removeHiddenOne () {
    nameQuestion.className = "hidden0"
    hiddenOne.className = "show";
  }
  startButton.addEventListener("click", removeHiddenOne);
  next1Button.addEventListener("click", questionOne);
  next2Button.addEventListener("click", questionTwo);
  next3Button.addEventListener("click", questionThree);
  next4Button.addEventListener("click", questionFour);
  next5Button.addEventListener("click", questionFive);
  next6Button.addEventListener("click", questionSix);
  next7Button.addEventListener("click", questionSeven);
  next8Button.addEventListener("click", questionEight);
  next9Button.addEventListener("click", questionNine);
  next10Button.addEventListener("click", questionTen);
  next11Button.addEventListener("click", questionEleven);
  next12Button.addEventListener("click", questionTwelve);
  resetButton.addEventListener("click", reset);
});

// function answersTree(event) {
//   event.preventDefault();
//   const hiddenTwo = document.getElementById("question2area");
//   const hiddenThree = document.getElementById("question3area");
//   const hiddenFour = document.getElementById("question4area");
//   const hiddenFive = document.getElementById("question5area");
//   const hiddenSix = document.getElementById("question6area");
//   const hiddenSeven = document.getElementById("question7area");
//   const hiddenEight = document.getElementById("question8area");
//   const hiddenNine = document.getElementById("question9area");
//   const hiddenTen = document.getElementById("question10area");
//   const hiddenEleven = document.getElementById("question11area");
//   const hiddenTwelve = document.getElementById("question12area");
//   const hiddenThirteen = document.getElementById("answer");
//   const answerValue1 = document.querySelector("input[name='q1radio']:checked").value;
//   const answerValue2 = document.querySelector("input[name='q2radio']:checked").value;
//   const answerValue3 = document.querySelector("input[name='q3radio']:checked").value;
//   const answerValue4 = document.querySelector("input[name='q4radio']:checked").value;
//   const answerValue5 = document.querySelector("input[name='q5radio']:checked").value;
//   const answerValue6 = document.querySelector("input[name='q6radio']:checked").value;
//   const answerValue7 = document.querySelector("input[name='q7radio']:checked").value;
//   const answerValue8 = document.querySelector("input[name='q8radio']:checked").value;
//   const answerValue9 = document.querySelector("input[name='q9radio']:checked").value;
//   const answerValue10 = document.querySelector("input[name='q10radio']:checked").value;
//   const answerValue11 = document.querySelector("input[name='q11radio']:checked").value;
//   const answerValue12 = document.querySelector("input[name='q12radio']:checked").value;
//   const finalAnswer = document.getElementById("showanswer");

//   if(answerValue1 = "q1a1"){
//     //option1
//     console.log("is q1a1 working");
//     hiddenOne.className = "hidden1";
//     hiddenTwo.className = "show";
//   }

//   else if(answerValue1 === "q1a2"){
//     //option2
//     console.log("is q1a2 working");
//     hiddenOne.className = "hidden1";
//     hiddenThree.className = "show";
//   }

//   else if(answerValue2 === "q2a1"){
//     //option3
//     console.log("is q2a1 working");
//     hiddenTwo.className = "hidden2";
//     hiddenFour.className = "show";
//   }

//   else if(answerValue2 === "q2a2"){
//     //option5
//     console.log("is q2a2 working");
//     hiddenTwo.className = "hidden2";
//     hiddenFive.className = "show";
//   }

//   else if(answerValue2 === "q2a3"){
//     //option6
//     console.log("is q2a3 working");
//     hiddenTwo.className = "hidden2";
//     hiddenSix.className = "show";
//   }

//   else if(answerValue3 === "q3a1"){
//     //option7
//     console.log("is q3a1 working");
//     hiddenThree.className = "hidden3";
//     hiddenFour.className = "show";
//   }

//   else if(answerValue3 === "q3a2"){
//     //option8
//     console.log("is q3a2 working");
//     hiddenThree.className = "hidden3";
//     hiddenFive.className = "show";
//   }

//   else if(answerValue3 === "q3a3"){
//     //option9
//     console.log("is q3a3 working");
//     hiddenThree.className = "hidden3";
//     hiddenSix.className = "show";
//   }

//   else if(answerValue4 === "q4a1"){
//     //option10
//     console.log("is q4a1 working");
//     hiddenFour.className = "hidden4";
//     hiddenSeven.className = "show";
//   }

//   else if(answerValue4 === "q4a2"){
//     //option11
//     console.log("is q4a2 working");
//     hiddenFour.className = "hidden4";
//     hiddenEight.className = "show";
//   }

//   else if(answerValue4 === "q4a3"){
//     //option12
//     console.log("is q4a3 working");
//     hiddenFour.className = "hidden4";
//     hiddenNine.className = "show";
//   }

//   else if(answerValue5 === "q5a1"){
//     //option13
//     console.log("is q5a1 working");
//     hiddenFive.className = "hidden5";
//     hiddenSeven.className = "show";
//   }

//   else if(answerValue5 === "q5a2"){
//     //option14
//     console.log("is q5a2 working");
//     hiddenFive.className = "hidden5";
//     hiddenEight.className = "show";
//   }

//   else if(answerValue5 === "q5a3"){
//     //option15
//     console.log("is q5a3 working");
//     hiddenFive.className = "hidden5";
//     hiddenNine.className = "show";
//   }

//   else if(answerValue6 === "q6a1"){
//     //option16
//     console.log("is q6a1 working");
//     hiddenSix.className = "hidden6";
//     hiddenSeven.className = "show";
//   }

//   else if(answerValue6 === "q6a2"){
//     //option17
//     console.log("is q6a2 working");
//     hiddenSix.className = "hidden6";
//     hiddenEight.className = "show";
//   }

//   else if(answerValue6 === "q6a3"){
//     //option18
//     console.log("is q6a3 working");
//     hiddenSix.className = "hidden6";
//     hiddenNine.className = "show";
//   }

//   else if(answerValue7 === "q7a1"){
//     //option19
//     console.log("is q7a1 working");
//     hiddenSeven.className = "hidden7";
//     hiddenTen.className = "show";
//   }

//   else if(answerValue7 === "q7a2"){
//     //option20
//     console.log("is q7a2 working");
//     hiddenSeven.className = "hidden7";
//     hiddenEleven.className = "show";
//   }

//   else if(answerValue7 === "q7a3"){
//     //option21
//     console.log("is q7a3 working");
//     hiddenSeven.className = "hidden7";
//     hiddenTwelve.className = "show";
//   }

//   else if(answerValue8 === "q8a1"){
//     //option22
//     console.log("is q8a1 working");
//     hiddenEight.className = "hidden8";
//     hiddenTen.className = "show";
//   }

//   else if(answerValue8 === "q8a2"){
//     //option23
//     console.log("is q8a2 working");
//     hiddenEight.className = "hidden8";
//     hiddenEleven.className = "show";
//   }

//   else if(answerValue8 === "q8a3"){
//     //option24
//     console.log("is q8a3 working");
//     hiddenEight.className = "hidden8";
//     hiddenTwelve.className = "show";
//   }

//   else if(answerValue9 === "q9a1"){
//      //option25
//      console.log("is q9a1 working");
//      hiddenNine.className = "hidden9";
//      hiddenTen.className = "show";
//   }

//   else if(answerValue9 === "q9a2"){
//      //option26
//      console.log("is q9a2 working");
//      hiddenNine.className = "hidden9";
//      hiddenEleven.className = "show";
//   }

//   else if(answerValue9 === "q9a3"){
//      //option27
//      console.log("is q9a3 working");
//      hiddenNine.className = "hidden9";
//      hiddenTwelve.className = "show";
//   }

//   else if(answerValue10 === "q10a1"){
//     finalAnswer.innerText = "Ruby";
//     console.log("is q10a1 working");
//     hiddenTen.className = "hidden10";
//     hiddenThirteen.className = "show";
//   }

//   else if(answerValue10 === "q10a2"){
//     finalAnswer.innerText = "Python";
//     console.log("is q10a2 working");
//     hiddenTen.className = "hidden10";
//     hiddenThirteen.className = "show";
//   }  

//   else if(answerValue10 === "q10a3"){
//     finalAnswer.innerText = "JavaScript";
//     console.log("is q10a3 working");
//     hiddenTen.className = "hidden10";
//     hiddenThirteen.className = "show";
//   }

//   else if(answerValue11 === "q11a1"){
//     finalAnswer.innerText = "C#";
//     console.log("is q11a1 working");
//     hiddenEleven.className = "hidden11";
//     hiddenThirteen.className = "show";
//   }

//   else if(answerValue11 === "q11a2"){
//     finalAnswer.innerText = "Python";
//     console.log("is q11a2 working");
//     hiddenEleven.className = "hidden11";
//     hiddenThirteen.className = "show";
//   }  

//   else if(answerValue11 === "q11a3"){
//     finalAnswer.innerText = "JavaScript";
//     console.log("is q11a3 working");
//     hiddenEleven.className = "hidden11";
//     hiddenThirteen.className = "show";
//   }

//   else if(answerValue12 === "q12a1"){
//     finalAnswer.innerText = "C#";
//     console.log("is q12a1 working");
//     hiddenTwelve.className = "hidden12";
//     hiddenThirteen.className = "show";
//   }

//   else if(answerValue12 === "q12a2"){
//     finalAnswer.innerText = "Python";
//     console.log("is q12a2 working");
//     hiddenTwelve.className = "hidden12";
//     hiddenThirteen.className = "show";
//   }  

//   else if(answerValue12 === "q12a3"){
//     finalAnswer.innerText = "JavaScript";
//     console.log("is q12a3 working");
//     hiddenTwelve.className = "hidden12";
//     hiddenThirteen.className = "show";
//   }

//   else if (true === true){
//     console.log("Something went wrong...");
// }};

