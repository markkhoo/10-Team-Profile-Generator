const Engineer = require('../lib/Engineer');

describe("Engineer Class", () => {
    it("getRole should return Engineer", () => {
        const testFunction = new Engineer().role;
        const testAnswer = 'Engineer';
        expect(testFunction).toBe(testAnswer);
    })

})