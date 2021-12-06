/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
  const symbols = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };
  let arr = num
    .toString()
    .split("")
    .reverse()
    .map((el) => Number(el));
  let str = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i]) {
      if (arr[i] % 5 === 4) {
        if (Math.floor(arr[i] / 5)) {
          str +=
            symbols[String(Math.pow(10, i))] +
            symbols[String(Math.pow(10, i + 1))];
        } else {
          str +=
            symbols[String(Math.pow(10, i))] +
            symbols[String(Math.pow(10, i) * 5)];
        }
      } else {
        if (Math.floor(arr[i] / 5)) {
          str += symbols[String(5 * Math.pow(10, i))];
        }
        for (let j = 0; j < arr[i] % 5; j++) {
          str += symbols[String(Math.pow(10, i))];
        }
      }
    }
  }
  return str;
}

convertToRoman(36);
