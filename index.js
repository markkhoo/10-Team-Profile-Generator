const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Main Class to run the application
class Application {
    constructor() {
        this.currentEmployee = 'Manager';
        this.listEmployees = [];
        this.htmlString = ``;
    }

    // This function creates a new Employee Class and compiles the questions for Inquirer
    pickEmployees() {
        if(this.currentEmployee == 'Manager') {
            this.generateEmployee = new Manager();
            this.allQuestions = this.generateEmployee.questions;
            this.allQuestions.push(this.generateEmployee.questionsEX);
            this.promptEmployees(this.allQuestions);
        } else if (this.currentEmployee == 'Engineer') {
            this.generateEmployee = new Engineer();
            this.allQuestions = this.generateEmployee.questions;
            this.allQuestions.push(this.generateEmployee.questionsEX);
            this.promptEmployees(this.allQuestions);
        } else if (this.currentEmployee == 'Intern') {
            this.generateEmployee = new Intern();
            this.allQuestions = this.generateEmployee.questions;
            this.allQuestions.push(this.generateEmployee.questionsEX);
            this.promptEmployees(this.allQuestions);
        }
    }

    // This function provides the prompt in commandline for the user to input information
    promptEmployees() {
        return inquirer
        .prompt(this.allQuestions)
        .then(responses => {
            // This adds the Employee type to the current object
            responses.type = this.currentEmployee;
            // This pushes the current object into the array of Employee objects
            this.listEmployees.push(responses);
            this.newEmployee();
        })
    }

    // This function prompts the user to add a new Employee
    newEmployee() {
        return inquirer
        .prompt({
            type: 'list',
            message: 'Add new employee?',
            choices: ['Engineer', 'Intern', 'none'],
            name: 'loop',
        })
        .then(result => {
            // Determines wether to make a new employee object or move on to next work
            if(result.loop == 'none') {
                // End Result to make html string
                this.generateLAS();
            } else {
                // Go back to make new Employee object
                this.currentEmployee = result.loop;
                this.pickEmployees();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    // This function generates the string to be written into and html file
    generateLAS() {
        // HTML content right before employee cards are written
        this.htmlString += `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
                <title>Team Profile</title>
            </head>
            <body class="container">
                <header class="row bg-danger">
                    <h1 class="text-center">Company Team Profile</h1>
                </header>
                <div class="row p-2 bg-light">
            `
        ;

        // HTML content for the Employee Array of Objects
        for (let i = 0; i < this.listEmployees.length; i++) {

            // HTML content shared for all Employees
            this.htmlString +=`
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.listEmployees[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this.listEmployees[i].type}</h6>
                        <p class="card-text">ID: ${this.listEmployees[i].id}</p>
                        <p class="card-text">Email: <a href="mailto:${this.listEmployees[i].email}" class="card-link">${this.listEmployees[i].email}</a></p>
                `
            ;
            // HTML content for Manager or Engineers or Interns
            if (this.listEmployees[i].type == 'Manager') {
                // HTML content for Manager
                this.htmlString +=`
                        <p class="card-text">Office Number: ${this.listEmployees[i].officeNumber}</p>
                        </div>
                    </div>
                    `
                ;
            } else if (this.listEmployees[i].type == 'Engineer') {
                // HTML content for Engineer
                this.htmlString +=`
                        <p class="card-text">GitHub: <a href="https://github.com/${this.listEmployees[i].username}" class="card-link">${this.listEmployees[i].username}</a></p>
                        </div>
                    </div>
                    `
                ;
            } else if (this.listEmployees[i].type == 'Intern') {
                // HTML content for Interns
                this.htmlString +=`
                        <p class="card-text">School: ${this.listEmployees[i].school}</p>
                        </div>
                    </div>
                    `
                ;
            };
        };
        // HTML content to close out
        this.htmlString +=`
                </div>
            </body>
            </html>
            `
        ;

        this.writeToFile();
        // console.log(this.listEmployees);
    }

    // This function writes the HTML file
    writeToFile() {
        fs.writeFile("./dist/index.html", this.htmlString, (err) => {
            if (err) {
                console.log("There is an error");
                throw err;
            };
            console.log('html created in dist/');
        });
    }
}

// =======================
// --- RUN APPLICATION ---
// =======================
const application = new Application();
application.pickEmployees();
