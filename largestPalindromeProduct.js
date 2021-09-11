/* Problem: Largest palindrome product
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two n-digit numbers. */

function largestPalindromeProduct(n) {
  let maxDigit = Math.pow(10, n);
  let minDigit = Math.pow(10, n - 1);
  let maxDivider = Math.floor(maxDigit / 11);
  let minDivider = Math.ceil(minDigit / 11);
  let stack = [];

  const test = (num) => {
    const str = String(num).split("");
    let mid = Math.floor(str.length / 2);
    for (let index = 0; index < mid; index++) {
      if (str[index] !== str[str.length - 1 - index]) {
        return false;
      }
    }
    return true;
  };
  for (let i = maxDigit - 1; i >= minDigit; i--) {
    for (let j = maxDivider; j >= minDivider; j--) {
      let result = i * j * 11;
      if (test(result)) stack.push(result);
    }
  }
  return Math.max(...stack);
}
