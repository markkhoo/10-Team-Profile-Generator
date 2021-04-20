const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


class Application {
    constructor() {
        this.currentEmployee = 'Manager';
        this.listEmployees = [];
        this.htmlString = ``;
    }

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

    promptEmployees() {
        return inquirer
        .prompt(this.allQuestions)
        .then(responses => {
            responses.type = this.currentEmployee;
            this.listEmployees.push(responses);
            this.newEmployee();
        })
    }

    newEmployee() {
        return inquirer
        .prompt({
            type: 'list',
            message: 'Add new employee?',
            choices: ['Engineer', 'Intern', 'none'],
            name: 'loop',
        })
        .then(result => {
            if(result.loop == 'none') {
                // End Result to make html string
                this.generateLAS();
            } else {
                this.currentEmployee = result.loop;
                this.pickEmployees();
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    generateLAS() {
        this.htmlString.concat(
            `<!DOCTYPE html>
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
        );

        for (let i = 0; i < this.listEmployees.length; i++) {

            this.htmlString.concat(
                `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${this.listEmployees[i].name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${this.listEmployees[i].type}</h6>
                        <p class="card-text">ID: ${this.listEmployees[i].id}</p>
                        <p class="card-text">Email: <a href="${this.listEmployees[i].email}" class="card-link">${this.listEmployees[i].email}</a></p>
                `
            );

            if (this.listEmployees[i].type == 'Manager') {

                this.htmlString.concat(
                    `
                        <p class="card-text">Office Number: ${this.listEmployees[i].officeNumber}</p>
                        </div>
                    </div>
                    `
                );

            } else if (this.listEmployees[i].type == 'Engineer') {

                this.htmlString.concat(
                    `
                        <p class="card-text">GitHub: <a href="https://github.com/${this.listEmployees[i].username}" class="card-link">${this.listEmployees[i].username}</a></p>
                        </div>
                    </div>
                    `
                );

            } else if (this.listEmployees[i].type == 'Intern') {

                this.htmlString.concat(
                    `
                        <p class="card-text">School: ${this.listEmployees[i].school}</p>
                        </div>
                    </div>
                    `
                );

            };

        };

        this.htmlString.concat(
            `
                </div>
            </body>
            </html>
            `
        );

        console.log(this.listEmployees);
    }

    
}






const application = new Application();

application.pickEmployees();
