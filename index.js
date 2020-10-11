const { default: Axios } = require("axios");
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const util = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type:"input",
        message:"Project Title",
        name:"project"
    },
    {
        type:"input",
        message:"Describe the Project",
        name:"description"
    },
    {
        type:"input",
        message:"Installation Instructions",
        name:"installation"
    },
    {
        type:"input",
        message:"Usage Information",
        name:"usage"
    },
    {
        type:"input",
        message:"Constribution Guidelines",
        name:"contributing"
    },
    {
        type:"input",
        message:"Test Instructions?",
        name:"tests"
    },
    {
        type:"input",
        message:"Your Project Repo Link",
        name:"repo"
    },
    // for other projects that use web server side below
    // {
    //     type:"input",
    //     message:"Your Live Project Link",
    //     name:"link"
    // },
    {
        type:"input",
        message:"Github Username?",
        name:"username"
    },
    {
        type:"input",
        message:"Provide Email",
        name:"email"
    },
    {
        type: "input",
        message: "Please provide the badges links that you want",
        name: "badge",
    },
    {
        type:"list",
        message:"What kind of license?",
        name:"license",
        choices:[
            "BSD",
            "MIT",
            "GPL"
        ]
    },
];
inquirer
.prompt(questions)
.then(function(data){
    //let readme = uti;

    const queryUrl = `https://api.github.com/users/${data.username}`;

    axios
    .get(queryUrl)
    .then(function(res){
        
        let github = {
         image: res.data.avatar_url,
         name:res.data.name,
         repoLink: res.data.html_url
        }

        fs.writeFile("readme.md", util(data, github), function(err) {
       if(err){
           throw err;
       } 
       console.log("Successful README");
        })

    })
   
});

// function to initialize program
function init() {
}

// function call to initialize program
init();





