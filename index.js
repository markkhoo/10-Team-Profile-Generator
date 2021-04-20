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
    
            console.log(responses);
    
            this.newEmployee();
        })
    }

    newEmployee () {
        return inquirer
        .prompt({
            type: 'list',
            message: 'Add new employee?',
            choices: ['Engineer', 'Intern', 'none'],
            name: 'loop',
        })
        .then(result => {
            if(result == 'none') {
                console.log("END OF NEW EMPLOYEE");
            } else {
                this.currentEmployee = result;
                this.pickEmployees();
            }
        });
    }
}






const application = new Application();

application.pickEmployees();
