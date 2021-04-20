// const inquirer = require('inquirer');
const Employee = require("./Employee");

class Manager extends Employee{
    constructor() {
        const role = 'Manager';

        super(role);

        this.officeNumber = "0000000000";
    }

    getOfficeNumber() {

    }

    // getRole() {
    //     return 'Manager';
    // }
}

module.exports = Manager;