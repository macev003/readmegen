// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
![licensebadge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## description
${data.description}

## Table of Contents (Optional)

If your README is very long, add a table of contents to make it easy for users to find what they need.

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)




  
  `;
  }
  
  module.exports = generateMarkdown;
  