// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your name for credits. (Required)',
        validate: userName => {
            if (userName) {
                return true;
            }
            else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'gitName',
        message: 'What is your GitHub user name? (Required)',
        validate: gitNameInput => {
            if (gitNameInput) {
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
            if (projectTitle) {
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
        name: 'link',
        message: 'Please provide a link to the GitHub repository for the project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your application (Required)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            }
            else {
                console.log('Please enter a brief description of your project.');
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
        name: 'tests',
        message: 'Please provide examples of how to test the application.'
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

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);

    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    })
};

// TODO: Create a function to initialize app
// calling async before a function makes the promisifies the function and makes it asynchronous.
async function init() {
    return inquirer.prompt(questions);
};


// Function call to initialize app
init()
    .then(readMeData => {
        return generateReadMe(readMeData);
    })
    .then(readMeTemplate => {
        return writeToFile('README.md', readMeTemplate)
    })
    .catch(err => {
        console.log(err);
    });
