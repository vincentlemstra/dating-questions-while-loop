'use strict';

// Variable array with questions
const questions = [
  "What is your first name?",
  "What is your last name?",
  "What is your age?",
  "Where do you live?",
  "What is your gender?",
  "Which genders are you interested in dating?",
  "What is your main hobby?",
  "What is your favourite movie?"
];

const answers = [];
let i = 0;

console.log (`questions length: ${questions.length}`);
console.log (`answers length: ${answers.length}`);

while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  // Save the answer to variable 'answers'
  answers.push(answer);
  i++;
}

// Prints all questions 
// console.log(questions);

// Prints all questions in a table with correct index
// console.table(questions);

// Prints a specific question 
// console.log(questions[3]);

// Prompts a specific question
// let awnser3 = prompt (questions[3]);
// console.log (awnser3);







