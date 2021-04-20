const inquirer = require('inquirer');
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github) {
        super();
        this.getRole('Engineer');
        this.github = github;
    }

    getGitHub() {

    }

    // getRoles() {
    //     return 'Engineer';
    // }
}

module.exports = Engineer;