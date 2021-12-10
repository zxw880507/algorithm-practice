/* Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number? */

function nthPrime(n) {
  let index = 1;
  let init = 2;
  let prime;

  while (index <= n) {
    let isPrime = true;

    const sqrt = Math.floor(Math.sqrt(init));
    for (let i = 1; i <= sqrt; i++) {
      if (init % i === 0 && i !== 1 && i !== init) {
        isPrime = false;
      }
    }
    if (isPrime) {
      prime = init;
      index++;
    }
    init++;
  }
  return prime;
}

nthPrime(6);
