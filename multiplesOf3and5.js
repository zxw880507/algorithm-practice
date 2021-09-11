/* Problem: Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below the provided parameter value number. */

function multiplesOf3and5(number) {
  let stack = [];
  let curr = 1;

  while (curr < number) {
    if (!(curr % 3 && curr % 5) && !stack.includes(curr)) {
      stack.push(curr);
    }
    curr++;
  }

  return stack.reduce((a, b) => a + b, 0);
}
