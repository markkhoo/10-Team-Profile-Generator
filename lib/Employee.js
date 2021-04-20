// const fs = require('fs');
// const inquirer = require('inquirer');

class Employee {
    constructor(role) {
        this.role = role;
        this.name = "name";
        this.id = "000";
        this.email = "email";
        this.questions = [
            {
                type: 'input',
                message: `What is the ${this.role}'s name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is the ${this.role}'s ID?`,
                name: 'ID',
            },
            {
                type: 'input',
                message: `What is the ${this.role}'s email?`,
                name: 'email',
            }
        ];
    }

    getName() {
        inquirer
        .prompt()
        .then(result => {
            this.name = result;
        })
    }

    getId() {
        inquirer
        .prompt()
        .then(result => {
            this.id = result;
        })
    }

    getEmail() {
        inquirer
        .prompt()
        .then(result => {
            this.email = result;
        })
    }

    // getRole(newRole) {
    //     this.role = newRole;
    //     return this.role;
    // }
}

module.exports = Employee;