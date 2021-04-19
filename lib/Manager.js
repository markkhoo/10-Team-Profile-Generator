const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber) {
        super();
        this.getRole('Manager');
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {

    }

    // getRole() {
    //     return 'Manager';
    // }
}

module.exports = Manager;