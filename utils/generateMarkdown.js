// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Description
${data.description}

## Table of Contents 
${data.tableOfContents}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

##Installation
${data.installation}

## Usage 
${data.usage}

##Credits
${data.credits}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}







  
  `;
  }
  
  module.exports = generateMarkdown;
  