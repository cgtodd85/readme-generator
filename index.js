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
