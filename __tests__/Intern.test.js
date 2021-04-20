const Intern = require('../lib/Intern');

describe("Intern Class", () => {
    it("getRole should return Intern", () => {
        const testFunction = new Intern().getRole('Intern');
        const testAnswer = 'Intern';
        expect(testFunction).toBe(testAnswer);
    })
    
})