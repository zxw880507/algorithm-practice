/* Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  let init = str[0].charCodeAt();
  for (let i = 1; i < str.length; i++) {
    if (str[i].charCodeAt() !== ++init) {
      return String.fromCharCode(init);
    }
  }
  return undefined;
}

fearNotLetter("abce");
