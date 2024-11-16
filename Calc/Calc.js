
const readline = require('readline');

// Extract the question from the command line argument
const question = process.argv.slice(2).join(' ');


function calculate(question) {
  // Regular expressions to match the numbers and operations
  const additionPattern = /what is (\d+) plus (\d+)\?/i;
  const subtractionPattern = /what is (\d+) minus (\d+)\?/i;
  const multiplicationPattern = /what is (\d+) multiplied by (\d+)\?/i;
  const divisionPattern = /what is (\d+) divided by (\d+)\?/i;

  let match;
  let num1, num2, result, operation;

  if ((match = question.match(additionPattern))) {
    [num1, num2] = [parseInt(match[1]), parseInt(match[2])];
    result = num1 + num2;
    operation = 'plus';
  } else if ((match = question.match(subtractionPattern))) {
    [num1, num2] = [parseInt(match[1]), parseInt(match[2])];
    result = num1 - num2;
    operation = 'minus';
  } else if ((match = question.match(multiplicationPattern))) {
    [num1, num2] = [parseInt(match[1]), parseInt(match[2])];
    result = num1 * num2;
    operation = 'multiplied by';
  } else if ((match = question.match(divisionPattern))) {
    [num1, num2] = [parseInt(match[1]), parseInt(match[2])];
    result = num1 / num2;
    operation = 'divided by';
  } else {
    console.log('Unsupported question format.');
    return;
  }

  console.log(`${num1} ${operation} ${num2} is ${result}`);
}

// Check if a question is provided
if (!question) {
  console.log('Please provide a question.');
} else {
  calculate(question);
}
