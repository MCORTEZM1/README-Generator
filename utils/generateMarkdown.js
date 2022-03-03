// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return `![MIT](https://img.shields.io/static/v1?label=License&message=MIT&color=success)`
  }
  else if (license === 'GNU AGPLv3') {
    return `![AGP](https://img.shields.io/static/v1?label=License&message=GNU-AGPLv3&color=blue)`
  }
  else if (license === 'GNU GPLv3') {
    return `![GPL](https://img.shields.io/static/v1?label=License&message=GNU-GPLv3&color=green)`
  }
  else if (license === 'GNU LGPLv3') {
    return `![LGP](https://img.shields.io/static/v1?label=License&message=GNU-LGPLv3&color=brightgreen)`
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `![MOZ](https://img.shields.io/static/v1?label=License&message=Mozilla-Public&color=success)`
  }
  else if (license === 'Apache License 2.0') {
    return `![APA](https://img.shields.io/static/v1?label=License&message=Apache&color=blue)`
  }
  else if (license === 'Boost Software License 1.0') {
    return `![BOS](https://img.shields.io/static/v1?label=License&message=Boost-Software&color=yellowgreen)`
  }
  else if (license === 'The Unlicense') {
    return `![UNL](https://img.shields.io/static/v1?label=License&message=Unlicense&color=success)`
  }
  else {
    return '';
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return `https://choosealicense.com/licenses/mit/`;
  }
  else if (license === 'GNU AGPLv3') {
    return `https://choosealicense.com/licenses/agpl-3.0/`;
  }
  else if (license === 'GNU GPLv3') {
    return `https://choosealicense.com/licenses/gpl-3.0/`;
  }
  else if (license === 'GNU LGPLv3') {
    return `https://choosealicense.com/licenses/lgpl-3.0/`;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `https://choosealicense.com/licenses/mpl-2.0/`;
  }
  else if (license === 'Apache License 2.0') {
    return `https://choosealicense.com/licenses/apache-2.0/`;
  }
  else if (license === 'Boost Software License 1.0') {
    return `https://choosealicense.com/licenses/bsl-1.0/`
  }
  else if (license === 'The Unlicense') {
    return `https://choosealicense.com/licenses/unlicense/`;
  }
  else {
    return '';
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== '') {
    return `
  ## **License**

  ${renderLicenseBadge(license)}

  To see more info regarding this license, please visit ${renderLicenseLink(license)}
  `}
  else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({ name, link, gitName, email, title, description, solve, learn, languages, install, usage, credit, license, tests }) {
  // console.log(title, credit)
  return `
  # ${title}

  ## **Description**
   
  - ${description}
  - This application was written using ${languages.join(', ')}
  - ${solve}
  - ${learn}

  ## **Table of Contents** 
  
  - [installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ### **Installation**
  
  ${install}


  ## **Usage**

  ${usage}


  ## **Credits** 

  This project was built by ${name} ${generateCollab(credit)}


  ${renderLicenseSection(license)}


  ## **How to Contribute**

  If you would like to add contribute to the project, feel free to fork from GitHub @${gitName} 
  Or click here: ${link}

  ## **Contact Me**

  Please reach out with any questions or concerns directly to: ${email}


${generateTests(tests)}

  `;
}

function generateCollab(credit) {
  if (credit !== '') {
    return `, in collaboration with ${credit}`
  }
  else {
    return '';
  }
};

function generateTests(tests) {
  if (tests !== '') {
    return `## **Tests**

  ${tests}
  `}
  else {
    return '';
  }
};

module.exports = generateMarkdown;
