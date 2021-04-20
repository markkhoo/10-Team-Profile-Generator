// const inquirer = require('inquirer');
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github) {
        const role = 'Engineer';

        super(role);

        this.github = github;
    }

    getGitHub() {

    }

    // getRoles() {
    //     return 'Engineer';
    // }
}

module.exports = Engineer;