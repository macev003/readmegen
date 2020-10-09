// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## description
${data.description}

## Table of Contents 
${data.tableOfContents}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)




  
  `;
  }
  
  module.exports = generateMarkdown;
  