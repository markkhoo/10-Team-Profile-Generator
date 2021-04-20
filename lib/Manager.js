const Employee = require("./Employee");

class Manager extends Employee{
    constructor() {
        const role = 'Manager';

        super(role);

        this.officeNumber = "0000000000";
        this.questionsMan = {
            type: 'input',
            message: `What is the Manager's office Number?`,
            name: 'officeNumber',
        };
    }

    // getOfficeNumber() {

    // }

    // getRole() {
    //     return 'Manager';
    // }
}

module.exports = Manager;