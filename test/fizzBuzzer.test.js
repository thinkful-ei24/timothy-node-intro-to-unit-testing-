const chai = require('chai');
const expect = chai.expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
    it('should return `fizz-buzz` if input is a multiple of both 3 and 5', function(){
        const inputs = [15,30,45];
        inputs.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz-buzz');
        });
    });
    
    it('should return `fizz` if input is a multiple of three but not a multiple of five', function(){
        const inputs = [3, 21, 36];
        inputs.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('fizz');
        });
    });

    it('should return `buzz` if input is a multiple of five but not a multiple of three', function(){
        const inputs = [5, 20, 50];
        inputs.forEach(input => {
            expect(fizzBuzzer(input)).to.equal('buzz');
        });
    });

    it('should return an integer if input is a positive number but not a multiple of three or five', function(){
        const inputs = [1, 14, 28];
        inputs.forEach(input => {
            expect(fizzBuzzer(input)).to.equal(input)
        });
    });

    it('should throw an error if input is not a number', function(){
        const inputs = [false, '1', 'string', {}];
        inputs.forEach(input => {
            expect(function(){
                fizzBuzzer(input).to.throw(Error);
            })
        });

    });
});