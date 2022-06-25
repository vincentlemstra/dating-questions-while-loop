'use strict';


// Qustions to ask for dating app:
// What is your first name?
// What is your last name?
// What is your age?
// Where do you live?
// What is your gender?
// Which genders are you interested in dating?
// What is your main hobby?
// What is your favourite movie?

/*
Checklist:
1. Create an array of strings, each string contains one question.
2. Split long lines into multiple lines.
3. Use your knowledge of of reading a value from an array to read one of the questions from the array.
4. Now use this value in combination with `prompt()` to actually ask the question to the user.
5. Because you’re going to use the while loop to loop over the array you’ll need to consider when you’ve asked the last question.
6. Your loop will need to do *some* the following things (not all):
  a. Write an if statement that breaks if we have no       questions left.
  b. If there are questions left: read the next one        and use it with prompt.
  c. You don’t need to save the response of the user.
  d. Make sure “something” changes so the next             iteration of the loop looks at the next question
7. Feel free to temporarily shorten the array of questions to make testing faster and easier. You can do this by commenting out part of the code that creates the questions array.
*/ 