/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let low = 0;
  let high = array.length - 1;
  let middle = Math.ceil((low + high) / 2);
  let guess = 0;
  while (low <= high) {
    middle = Math.ceil((low + high) / 2);
    guess = array[middle];
    if (guess === value) {
      return middle;
    }
    if (guess > value) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

module.exports = findIndex;
