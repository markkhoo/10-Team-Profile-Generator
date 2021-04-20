const Employee = require("./Employee");

class Engineer extends Employee{
    constructor() {
        const role = 'Engineer';

        super(role);

        this.github = 'username';
        this.questionsEX = {
            type: 'input',
            message: `What is the Engineer's GitHub username?`,
            name: 'username',
        };
    }

    // getGitHub() {

    // }

    // getRoles() {
    //     return 'Engineer';
    // }
}

module.exports = Engineer;