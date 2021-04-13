const fs = require("fs");
const inquirer = require("inquirer");
inquirer
    .prompt([
        {
            type: "input",
            name: "Title",
            message: "What is your project's title?"
        },
        {
            type: "input",
            name: "Description",
            message: "What is your project about?"
        },
        {
            type: "input",
            name: "Contents",
            message: "Table of Contents: "
        },
        {
            type: "input",
            name: "Installation",
            message: "How do you install this software?"
        },
        {
            type: "input",
            name: "Usage",
            message: "What can people use this software for?"
        },
        {
            type: "input",
            name: "License",
            message: "What license are you releasing your software under?"
        },
        {
            type: "input",
            name: "Contributors",
            message: "Who contributed on this project?"
        },
        {
            type: "input",
            name: "Test",
            message: "How did you test your project?"
        },
        {
            type: "input",
            name: "Questions",
            message: "Frequently asked questions: "
        }
    ])
    .then(data => {
        const title = data.Title;
        const description = data.Description;
        const tableofcontents = data.Contents;
        const installation = data.Installation;
        const usage = data.Usage;
        const license = data.License;
        const contributors = data.Contributors;
        const tests = data.Tests;
        const questions = data.Questions;

        let readmeContent = `
## Title:${title}

## Description:
${description}
## Table of Contents: 
${tableofcontents}
## Installation: 
${installation}
## Usage:
${usage}
## License:
${license}
## Contributors:
${contributors}
## Tests:
${tests}
## Questions: 
${questions}
        `;
        fs.writeFile("README.md", readmeContent, err => {
            if (err) {
                throw err;
            }
            console.log("success!");
        });
    });