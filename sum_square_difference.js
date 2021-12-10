/* Problem 6: Sum square difference
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.

 */

function sumSquareDifference(n) {
  const sumOfSquares = (n) => {
    if (n === 1) {
      return 1;
    }
    return Math.pow(n, 2) + sumOfSquares(n - 1);
  };

  const squareOfSum = (n, sum = 0) => {
    if (n === 1) {
      return Math.pow(sum + 1, 2);
    }
    return squareOfSum(n - 1, (sum += n));
  };
  return squareOfSum(n) - sumOfSquares(n);
}

sumSquareDifference(100);
