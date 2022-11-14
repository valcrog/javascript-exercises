const add = (a, b) => a + b

const subtract = (a, b) => a - b

const sum = (array) => array.reduce((sum, element) => sum + element, 0);

const multiply = (array) => {
  let total = 1;
  array.forEach((number) => {
    total *= number;
  });
  return total;
};

const power = (a, b) => Math.pow(a, b);

const factorial = function(n) {
	if (n == 0) {
    return 1;
  } else {
    return multiply([...Array(n).keys()].map(i => i + 1));
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
