// const fs = require('fs');
const inquirer = require('inquirer');

class Employee {
    constructor() {
        this.role = "employee";
        this.name = this.getName(this.role);
        this.id = this.getId(this.role);
        this.email = this.getEmail(this.role);
    }

    getName() {
        inquirer
        .prompt({
            type: 'input',
            message: `What is the ${this.role}'s name?`,
            name: 'name',
        })
        .then(result => {
            this.name = result;
        })
    }

    getId() {
        inquirer
        .prompt({
            type: 'input',
            message: `What is the ${this.role}'s ID?`,
            name: 'ID',
        })
        .then(result => {
            this.id = result;
        })
    }

    getEmail() {
        inquirer
        .prompt({
            type: 'input',
            message: `What is the ${this.role}'s email?`,
            name: 'email',
        })
        .then(result => {
            this.email = result;
        })
    }

    getRole(newRole) {
        this.role = newRole;
        return this.role;
    }
}

module.exports = Employee;