/* No Repeats Please
Return the number of total permutations of the provided string 
that don't have repeated consecutive letters. Assume that all characters 
in the provided string are each unique.

For example, aab should return 2 because it has 
6 total permutations (aab, aab, aba, aba, baa, baa), 
but only 2 of them (aba and aba) don't have 
the same letter (in this case a) repeating. */

function permAlone(str) {
  const arr = str.split("");
  let count = 0;
  const helper = (tempArr, restArr) => {
    if (tempArr.length === arr.length) {
      const newStr = tempArr.join("");
      if (!/([a-z]|[A-Z]|[0-9])(\1+)/g.test(newStr)) {
        count += 1;
      }
    }
    restArr.forEach((char, index) => {
      const temp = [...restArr];
      temp.splice(index, 1);
      helper(tempArr.concat(char), temp);
    });
  };
  helper([], arr);
  return count;
}
