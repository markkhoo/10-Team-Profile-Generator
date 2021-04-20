const Manager = require('../lib/Manager');

describe("Manager Class", () => {
    it("getRole should return Manager", () => {
        const testFunction = new Manager().getRole('Manager');
        const testAnswer = 'Manager';
        expect(testFunction).toBe(testAnswer);
    })
    
})