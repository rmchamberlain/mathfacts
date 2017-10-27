var numberCorrect = 0;

function ArithmeticProblem(number1, number2, operation) {
  this.number1 = number1;
  this.number2 = number2;
  this.operation = operation;
  switch (operation) {
    case '+':
      this.answer = number1 + number2;
      break;
    case '-':
      this.answer = number1 - number2;
      break;
    case '*':
      this.answer = number1 * number2;
      break;
    case '/':
      this.answer = number1 / number2;
      break;
  }
}

function generate_addition_problem(max_number, negatives) {
  answer = Math.round(Math.random()*max_number);
  number1 = Math.round(Math.random()*answer);
  number2 = answer - number1;
  return new ArithmeticProblem(number1, number2, '+');
}

function generate_subtraction_problem(max_number, negatives) {
  number1 = Math.round(Math.random()*max_number);
  number2 = Math.round(Math.random()*number1);
  return new ArithmeticProblem(number1, number2, '-');
}

function generate_multiplication_problem(max_number, negatives) {
  number1 = Math.round(Math.random()*max_number);
  number2 = Math.round(Math.random()*max_number);
  return new ArithmeticProblem(number1, number2, '*');
}

function generate_division_problem(max_number, negatives) {
  number1 = Math.round(Math.random()*max_number);
  number2 = Math.round(Math.random()*max_number);
  divisor = number1*number2;
  return new ArithmeticProblem(divisor, number1, '/');
}

function generate_problem(max_number, negatives, operation_set) {
  var operation = operation_set[Math.round(Math.random()*(operation_set.length-1))]
  switch (operation) {
    case '+':
      problem = generate_addition_problem(max_number, negatives);
      break;
    case '-':
      problem = generate_subtraction_problem(max_number, negatives);
      break;
    case '*':
      problem = generate_multiplication_problem(max_number, negatives);
      break;
    case '/':
      problem = generate_division_problem(max_number, negatives);
      break;
  }
  return problem;
}

