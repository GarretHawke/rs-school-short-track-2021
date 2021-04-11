/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNumber = 0;
  let newString = '';
  const arr = String(n).split('').map(Number);
  const indexOfMinimum = arr.indexOf(Math.min.apply(null, arr));
  arr.splice(indexOfMinimum, 1);
  newString = arr.join('');
  newNumber = Number(newString);
  return newNumber;
}

module.exports = deleteDigit;
