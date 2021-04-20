// const inquirer = require('inquirer');
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school) {
        super();
        this.getRole('Intern');
        this.school = school;
    }

    getSchool() {

    }

    // getRole() {
    //     return 'Intern';
    // }
}

module.exports = Intern;