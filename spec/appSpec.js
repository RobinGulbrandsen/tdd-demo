var sumNumbers = require('../app');

describe('sumArray', function() {
  //Eric
  it('should return 0 if the numbers array is empty', function() {
    var sum = sumNumbers([]);
    expect(sum).toBe(0);
  });

  //Robin
  it('should return sum of numbers array with integers', function() {
    var sum = sumNumbers([1,2,3,4]);
    expect(sum).toBe(10);
  });

  //Eric
  it('should return sum of numbers array with string numbers', function() {
    var sum = sumNumbers(['1','2',3]);
    expect(sum).toBe(6);
  });

  //Robin
  it('should flatten arrays', function() {
    var sum = sumNumbers([[1,2],3,[[4]]]);
    expect(sum).toBe(10);
  });
});