// function to generate markdown for README
function generateMarkdown(data,github) {
  return `# ${data.project}
  ${data.badge}

## Table of contents
- [Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Test](#Test)
- [Repository Link](#Repositories)
- [Questions](#Questions?)
- [GitHub Info](#GitHub) 
## Description 
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${data.license}
## Contributors
${data.contributing}
## Test
${data.tests}
## Repositories
- [GitHub Portfolio](${github.repoLink})
- [Project Repo](${data.repo})
## Questions?
- ${data.username}
- ${data.email}
## GitHub Profile
![Profile Image](${github.image})
- ${github.name}
`;
}

module.exports = generateMarkdown;

//for projects that use web server side. place under repo links
//- [Live Project Link](${data.link})
