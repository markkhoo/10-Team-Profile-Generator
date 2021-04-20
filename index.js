const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


class Application {
    constructor() {
        this.currentEmployee = 'Manager';
        this.listEmployees = [];
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


        console.log(this.listEmployees);
    }
}






const application = new Application();

application.pickEmployees();
