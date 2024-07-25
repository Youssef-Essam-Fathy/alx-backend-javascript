const calculateNumber = require('./2-calcul_chai');
const expect = require('chai').expect
const { describe } = require('mocha');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });

  it('should return the subtraction of rounded numbers', function() {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
  });

  it('should return the division of rounded numbers', function() {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it ('should return Error when dividing by zero', function() {
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
  })
});