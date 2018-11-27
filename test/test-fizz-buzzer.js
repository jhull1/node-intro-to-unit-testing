//Inside this file, write unit tests for the fizzBuzzer function found in fizzBuzzer.js. 
//Be sure to test the normal case on a range of representative inputs, 
//and test for at least one edge case (for instance, non-numeric inputs).

// import chai, declare expect variable
const expect = require('chai').expect;

// import fizzBuzzer
const adder = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function() {

 // test the normal case
  it('should test if num is divisible by 3, 5, 15, or none', function() {
    // range of normal inputs, including
    // notable cases like negative answers
    const normalCases = [
      {a: 3, expected: 'fizz'},
      {a: 5, expected: 'buzz'},
      {a: 15, expected: 'fizz-buzz'},
      {a: 14, expected: 14}
    ];

    // for each input (a), `fizzBuzz` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzz(input.a);
      expect(answer).to.equal(input.expected);
    });
  });

   it('should raise error if args not numbers', function() {
    // range of bad inputs
    const badInputs = [
      ['a'],
      ['1'], //why does 1 as a string not work here
      [false]
    ];

     // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzz(input[0]);
      }).to.throw(Error);
    });
  });
});