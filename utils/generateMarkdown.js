// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data.license);

  return `# ${data.title}


  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Development](#Development)
  - [Github Info](#github)
  - [Contact] (#contact)
  - [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.test}

  ## Development
  ${data.dev}

  ## Github Info
  ${data.github}

  ## Contact
  This project was created by ${data.name}.
  Please contact me at ${data.email} with any questions.

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
