/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

function smallestCommons(arr) {
  const [min, max] = arr.sort((a, b) => a - b);
  const newArr = Array(max - min + 1)
    .fill(0)
    .map((_, index) => index + min);
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);

  return newArr.reduce((multi, curr) => lcm(multi, curr));
}
smallestCommons([1, 5]);
