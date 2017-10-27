var countdown;

function fill_problem() {
  var maxnum = document.getElementById('mf-maxnumber').value;
  problem = generate_problem(maxnum, false, ['+','-']);
  var num1_el = document.getElementById('mf-number1');
  num1_el.textContent = problem.number1;
  var num2_el = document.getElementById('mf-number2');
  num2_el.textContent = problem.number2;
  var op_el = document.getElementById('mf-operation');
  op_el.textContent = problem.operation;
  var answerBox = document.getElementById('mf-answer');
  answerBox.value = null
  answerBox.setAttribute('correct-answer', problem.answer);
}

function submitAnswer(e) {
  var answer = e.target.value;
  if (answer == e.target.getAttribute('correct-answer')) {
    e.target.removeAttribute('placeholder');
    numberCorrect++;
    document.getElementById('mf-stats').innerHTML = 'Number Correct: ' + numberCorrect;
    fill_problem();
  } else {
    e.target.value = null;
    e.target.setAttribute('placeholder', 'Wrong.');
  }
}

function start() {
  numberCorrect = 0;
  document.getElementById('mf-stats').innerHTML = 'Number Correct: ' + numberCorrect;
  document.getElementById('mf-minutes').setAttribute('disabled', true);
  document.getElementById('mf-maxnumber').setAttribute('disabled', true);
  document.getElementById('mf-answer').removeAttribute('disabled');
  fill_problem();
  document.getElementById('mf-answer').focus();
  start_btn = document.getElementById('mf-start-button');
  start_btn.classList.remove('btn-success');
  start_btn.classList.add('btn-danger');
  start_btn.textContent = 'Stop';
  start_btn.setAttribute('running', true)

  var now = new Date().getTime();
  var minutes = document.getElementById('mf-minutes').value;
  var done = now + Math.round(minutes*60*1000);

  countdown = setInterval(function() {
    var now = new Date().getTime();
    var distance = done - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.ceil((distance % (1000 * 60)) / 1000);
    document.getElementById('mf-timer').innerHTML = minutes + ':' + seconds;
    if (distance < 0) {
      stop();
    }
  }, 1000);
}

function stop() {
  clearInterval(countdown);
  document.getElementById('mf-minutes').removeAttribute('disabled');
  document.getElementById('mf-maxnumber').removeAttribute('disabled');
  document.getElementById('mf-answer').setAttribute('disabled', true);
  start_btn = document.getElementById('mf-start-button');
  start_btn.classList.remove('btn-danger');
  start_btn.classList.add('btn-success');
  start_btn.textContent = 'Start';
  start_btn.removeAttribute('running');
  document.getElementById('mf-timer').innerHTML = '0:00';
}

function startstop() {
  start_btn = document.getElementById('mf-start-button');
  if (start_btn.getAttribute('running')) {
    stop();
  } else {
    start();
  }
}

var answerBox = document.getElementById('mf-answer');
answerBox.addEventListener('change', submitAnswer, false);

start_el = document.getElementById('mf-start-button');
start_el.addEventListener('click', startstop, false);

