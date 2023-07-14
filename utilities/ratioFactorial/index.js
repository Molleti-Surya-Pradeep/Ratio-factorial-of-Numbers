const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

function ratioAndFactorial(num1, num2, num3) {
  let ratio = ratioOfTwoNumbers(num1, num2);
  let factorial = factorialOfNumber(num3);

  return { ratio, factorial };
}
module.exports = ratioAndFactorial;
