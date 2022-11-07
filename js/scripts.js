function removeHidden1(event) {
  event.preventDefault();
  const startQ1 = document.getElementById("hidden1");
  startQ1.classList.remove("hidden1");
}

function removeHidden2(event) {
  event.preventDefault();
  let showQ2 = document.getElementById("hidden2");
  showQ2.onclick.remove("hidden2");
}

function removeHidden3(event) {
  event.preventDefault();
  let showQ3 = document.getElementById("hidden3");
  showQ2.onclick.remove("hidden3");
}
function removeHidden4(event) {
  event.preventDefault();
  let showQ4 = document.getElementById("hidden4");
  showQ2.onclick.remove("hidden4");
}

function removeHidden5(event) {
  event.preventDefault();
  let showQ5 = document.getElementById("hidden5");
  showQ2.onclick.remove("hidden5");
}

function removeHidden6(event) {
  event.preventDefault()
  let showQ6 = document.getElementById("hidden6");
  showQ2.onclick.remove("hidden6");
}


window.addEventListener("click",function(){
  click.preventDefault()
  const start = document.getElementById("start");
  start.onclick.removeHidden1("click");

  const next1 = document.getElementById("hidden2");
  next1.onclick.removeHidden2("click");

  const next2 = document.getElementById("hidden3");
  next2.onclick.removeHidden3("click");

  const next3 = document.getElementById("hidden4");
  next3.onclick.removeHidden4("click");

  const next4 = document.getElementById("hidden5");
  next4.onclick.removeHidden5();

  const next5 = document.getElementById("hidden6");
  next5.onclick.removeHidden6();
});