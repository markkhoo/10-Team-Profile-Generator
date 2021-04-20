const Employee = require("./Employee");

class Intern extends Employee{
    constructor() {
        const role = 'Intern';

        super(role);

        this.school = 'school';
        this.questionsEX = {
            type: 'input',
            message: `What is the Intern's school?`,
            name: 'school',
        };
    }

    // getSchool() {

    // }

    // getRole() {
    //     return 'Intern';
    // }
}

module.exports = Intern;