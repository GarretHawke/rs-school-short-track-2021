/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const array = str.split('');
  let count = 1;
  let newStr = '';
  for (let i = 0; i < array.length; i += 1) {
    while (array[i] === array[i + 1]) {
      count += 1;
      i += 1;
    }
    if (count === 1) {
      count = '';
    }
    newStr += `${count}${array[i]}`;
    count = 1;
  }
  return newStr;
}

module.exports = encodeLine;
