
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const questions = [
  // array of questions for user
    {
        type: "input",
        message: "What is the title for this project?",
        name: "title"
      },
      {
        type: "input",
        message: "Give a description of your project",
        name: "description"
      },
      {
        type: "list",
        message: "Please choose a license option",
        name: "license",
        choices: ["MIT", "Apache2.0", "GNUv3.0", "BSD3", "none"]
      },
      {
        type: "input",
        message: "What is needed to install this application?",
        name: "installation"
      },
      {
        type: "list",
        message: "Are you allowing contributors?",
        name: "contributors",
        choices: ["Yes", "No"]
      },
      {
        type: "input",
        message: "What is your GitHub profile?",
        name: "questions"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "questions"

      }

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        // Use user feedback for... whatever!!
        writeToFile("readme.md", generateMarkdown({...answers}))
      })

}

// function call to initialize program
init();
