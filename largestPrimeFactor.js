/* Problem 3: Largest prime factor
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the given number? */

function largestPrimeFactor(number) {
  let prime = [];
  for (let i = 1; i <= number; i++) {
    let isPrime = true;
    let n = Math.floor(Math.sqrt(i));
    for (let j = 1; j <= n; j++) {
      if (!(i % j) && j !== 1) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime.push(i);
    }
  }

  return prime.filter((el) => !(number % el)).pop();
}
