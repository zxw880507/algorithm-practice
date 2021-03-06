/* Problem: Even Fibonacci Numbers

Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed n, 
find the sum of the even-valued terms. */

function fiboEvenSum(n) {
  let stack = [1, 2];
  let sum = 0;
  while (sum <= n) {
    sum = stack[stack.length - 2] + stack[stack.length - 1];
    stack.push(sum);
  }
  return stack.filter((el) => !(el % 2)).reduce((a, b) => a + b, 0);
}
