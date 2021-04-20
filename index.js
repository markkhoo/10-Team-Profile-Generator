const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

var creationFlag = true;
var currentEmployee = 'Manager';

const listEmployees = [];

function newEmployee () {
    inquirer
    .prompt({
        type: 'list',
        message: 'Add new employee?',
        choices: ['Engineer', 'Intern', 'none'],
        name: 'loop',
    })
    .then(result => {
        if(require == 'none') {
            creationFlag = false;
        } else {
            currentEmployee = result;
        }
    })
};

function pickEmployees() {
    while(creationFlag) {
        if(currentEmployee == 'Manager') {
            const manager = new Manager();
            const allQuestions = manager.questions;
            allQuestions.push(manager.questionsMan);
            inquirer
            .prompt(allQuestions)
            .then(responses => {
    
                console.log(responses);
            })
        } else if (currentEmployee == 'Engineer') {
    
            newEmployee();
        } else if (currentEmployee == 'Intern') {
    
            newEmployee();
        } else {
            creationFlag = false;
        }
    };
};

pickEmployees();







