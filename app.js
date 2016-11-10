/**
  sumNumbers takes an array and sums all numbers within and
  returns the result.

  @param sumNumbers   Array you want to sum content of.
  @return             Sum of elements in array.
*/
var sumNumbers = function(numbers) {
  var sum = 0;
  numbers.forEach(function(number) {
    if (Array.isArray(number)) {
      sum += sumNumbers(number);
    } else {
      sum += parseFloat(number);
    }
  });
  return sum;
};

module.exports = sumNumbers;

/*
  1: Writes a test (return deault 0)
  2: Writes code for test to pass
  2: Writes test that adds a check, that FAILS
    (sums numbers)
  1: Write code to make the tests pass
  1: Write a new test that fails
    (edge case with object)



*/