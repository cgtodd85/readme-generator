function renderLicenseSection(license) {
  if (license === "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "GNU AGPLv3") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license === "GNU GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === "GNU LGPLv3") {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  if (license === "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license === "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

function generateMarkdown(data) {
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
  - [Contact](#contact)
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
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
