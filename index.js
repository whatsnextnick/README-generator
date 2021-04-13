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

        let readmeContent = `
        ##Title: ${title}
        ##Description: 
        ${description}
        ##Table of Contents: 
        ${tableofcontents}
        
        
        
        `;
        fs.writeFile("readme.txt", readmeContent, err => {
            if (err) {
                throw err;
            }
            console.log("success!");
        });
    });