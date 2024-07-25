const assert = require('assert');
const calculateNumber = require('./1-calcul');
const { describe } = require('mocha');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
  });

  it('should return the subtraction of rounded numbers', function() {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
  });

  it('should return the division of rounded numbers', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });

  it ('should return Error when dividing by zero', function() {
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
  })

})
