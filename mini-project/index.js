const fs = require("fs");
const inquirer = require("inquirer");

inquirer
    .prompt([
        {
            type: 'input',
            message: "What is your first name?",
            name: "first_name",
        },
        {
            type: 'input',
            message: "What is your last name?",
            name: "last_name",
        },
        {
            type: 'input',
            message: "Write a bio",
            name: "bio",
        },
        {
            type: 'input',
            message: "Where are you located?",
            name: 'location',
        },
        {
            type: 'input',
            message: "Enter your LinkedIn URL",
            name: 'linkedin',
        },
        {
            type: 'input',
            message: "Enter your Github URL",
            name: 'github',
        }
    ]).then(answers => {
        const firstname = answers.first_name;
        const lastname = answers.last_name;
        const bio = answers.bio;
        const location = answers.location;
        const linked = answers.linkedin;
        const git = answers.github;

        const htmlPage = `<!DOCTYPE html>
        <html>
        
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
            <title>Mini Project</title>
        
            <!-- Compiled and minified CSS -->
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"
                integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        
        </head>
        
        <body>
        
            <!--User Input Area-->
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="first_name" type="text" class="validate">
                            <label for="first_name">${firstname}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="last_name" type="text" class="validate">
                            <label for="last_name">${lastname}</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="bio" type="text" class="validate">
                            <label for="Bio">${bio}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="location" type="text" class="validate">
                            <label for="Location">${location}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="linkedin" type="text" class="validate">
                            <label for="LinkedIn">${linked}</label>
                        </div>
                        <div class="input-field col s6">
                            <input id="github" type="text" class="validate">
                            <label for="Github">${git}</label>
                        </div>
        
                </form>
            </div>
            <br>
            <br>
        
            <!-- Compiled and minified JavaScript -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        </body>
        
        </html>`;
        fs.writeFile("index.html", htmlPage, function(err) {
            if(err) {
                throw err;
            }
            console.log("Successfully created an html file");
        })
    });
