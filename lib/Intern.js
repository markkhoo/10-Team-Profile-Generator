// const inquirer = require('inquirer');
const Employee = require("./Employee");

class Intern extends Employee{
    constructor(school) {
        const role = 'Intern';

        super(role);

        this.school = school;
    }

    getSchool() {

    }

    // getRole() {
    //     return 'Intern';
    // }
}

module.exports = Intern;