/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let arr = String(n).split('');
  while (arr.length > 1) {
    let sum1 = 0;
    arr.forEach((element) => {
      sum1 += Number(element);
    });
    arr = String(sum1).split('');
    sum = sum1;
  }
  return sum;
}

module.exports = getSumOfDigits;
