// function to calculate the result of the survey
function createAnswers() {
  var choices = document.getElementsByTagName("input");

  var maxscore = Math.max(c1score, c2score, c3score);

  var answerbox = document.getElementById("answer");
  if (chouces[1].checked == 1) {
    answerbox.innerHTML = "answerFdsdfsd";
  }

  var toMap = document.getElementById("button_placeholder");
}

function resetAnswer() {
  var answerbox = document.getElementById("answer");
  answerbox.innerHTML = "Your result will show up here!";
}
