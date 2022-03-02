// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub user name? (Required)',
        validate: gitNameInput => {
            if(gitNameInput){
                return true;
            }
            else {
                console.log('Please enter your GitHub user name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title? (Required)',
        validate: projectTitle => {
            if (projectTitle){
                return true;
            }
            else {
                console.log('Please enter a title for your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application (Required)',
        validate: projectDescription => {
            if (projectDescription){
                return true;
            }
            else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'solve',
        message: 'What problem does this project solve or what was your motivation to build it?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn while building this project?'
    },
    {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'bootstrap', 'Node']
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to install your project? Please include step-by-step instructions of how to get the development environment running.'
    },
    {   
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of how to use the application.'
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Please list your collaborators for the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license type for your project. (Not sure which? See: https://choosealicense.com/licenses/)',
        choices: ['MIT License', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide examples of how to test the application.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, err =>{
        if (err) throw err;
    });
};

// TODO: Create a function to initialize app
// calling async before a function makes the promisifies the function and makes it asynchronous.
// Additionally, this will allow you to use the await keyword within the function. 
async function init() {
    const responses = await inquirer.prompt(questions);
    console.log(responses)

    c
};


// Function call to initialize app
init()
 

