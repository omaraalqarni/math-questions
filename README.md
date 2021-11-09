# math-questions
the project's purpose is for users to enter different numbers and and the select the operaton(addition, subtraction, multiplication, division). 
Then, They will be redirected to another page where they see the entered equation and **three options** where, obviously, two of them are wrong:). After that, the user gets alerted to wether there answer is correct or wrong.


# Technical Info:
This project was implemented using Node.js, Express.js, and EJS. 
- There are two routes, 
  - The first one is the main route where it has a post request where the numbers gets requested along with the operator. Also, The final result gets calculated and put in a shuffled array with two random numbers
  - The second route is /quizPage where I mostly used EJS to render the full equation as a string, the array of three options, and the correct answer to show them on the quiz page.
  - By using these technologies, all the computing is coming from the server-side.
