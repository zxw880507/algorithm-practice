/* Problem: 
Smallest multiple
2520 is the smallest number that can be divided 
by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible 
by all of the numbers from 1 to n? */

function smallestMult(n) {
  let result = 1;

  const lcm = (a, b) => {
    return (a * b) / gcm(a, b);
  };
  const gcm = (a, b) => {
    if (!b) return a;
    return gcm(b, a % b);
  };
  for (let i = 1; i <= n; i++) {
    result = lcm(result, i);
  }
  return result;
}
