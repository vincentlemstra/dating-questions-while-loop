'use strict';

// Variable array with questions
const questions = [
  "What is your first name?",
  "What is your last name?",
  // "What is your age?",
  // "Where do you live?",
  // "What is your gender?",
  // "Which genders are you interested in dating?",
  // "What is your main hobby?",
  // "What is your favourite movie?"
];

const answers = [];
let i = 0;

console.log(`questions length: ${questions.length}`);
console.log(`answers length: ${answers.length}`);

while (answers.length < questions.length) {
  const question = questions[i];
  const answer = prompt(question);

  // answers can't be shorter than 2 characters
  if (answer.length < 3) {
    console.log("This answer is too short");
    continue;
  }
  // Save the answer to variable 'answers'
  answers.push(answer);
  i++;
}

// print 2 rows: the question, with the corrisponding answer.
for (let i = 0; i < answers.length; i++) {
  const humanNumber = i + 1;
  console.log(`Question ${humanNumber}: ${questions[i]}`);
  console.log(`Answer: ${answers[i]}`);
}

