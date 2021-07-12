const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "test",
      message: "enter a test message",
    },
  ])
  .then((data) => console.log(data));

/* 
  
  To do:

  Name of prompts
  - title
  - descrip
  - table contents
    - LINKS to click on that take you to sections of readme
  - installation instruc
  - usage
 
  - contributing
  - test instructions
  - questions to ask me?
    -add github username, link to user profile
    - email address to reach you with questions
  - license
    - CHOICE from a LIST
    - badge is added to top of readme with license info
  
write file to markdown .md and save
  Final steps:
  include screenshots
  Screencastify demonstration


  
  
  */
