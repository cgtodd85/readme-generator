const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "Please enter your name: ",
    },
    {
      type: "input",
      name: "title",
      message: "Please enter a title for your project: ",
    },
    {
      type: "input",
      name: "description",
      message:
        "Please enter a description, i.e. What motivated you? What problem does it solve? What did you learn? ",
    },
    {
      type: "input",
      name: "installation",
      message: "Please enter installation instructions: ",
    },
    {
      type: "input",
      name: "usage",
      message: "Please enter usage guidance: ",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Please enter any contributors to this project and their roles if applicable: ",
    },
    {
      type: "input",
      name: "tests",
      message: "Please enter any test instructions: ",
    },
    {
      type: "input",
      name: "dev",
      message: "Please enter any instructions for future development: ",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter github username: ",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter email address: ",
    },
    {
      type: "list",
      name: "license",
      message: "Please choose a license for your project: ",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
        "MIT License",
        "The Unlicense",
      ],
    },
  ])
  .then((data) => {
    const genReadMe = generateMarkdown(data);
    fs.writeFile("README.md", genReadMe, (err) =>
      err
        ? console.log(err)
        : console.log("Susccess! Check out your README.md!")
    );
  });
