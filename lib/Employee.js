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
                name: 'id',
            },
            {
                type: 'input',
                message: `What is the ${this.role}'s email?`,
                name: 'email',
            }
        ];
    }

    // getName() {

    // }

    // getId() {

    // }

    // getEmail() {

    // }

    // getRole(newRole) {
    //     this.role = newRole;
    //     return this.role;
    // }
}

module.exports = Employee;