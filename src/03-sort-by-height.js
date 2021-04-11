/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const newArray = [];
  const arraySorted = arr.filter((element) => element !== -1).sort((a, b) => a - b);
  arr.forEach((element) => {
    if (element !== -1) {
      newArray.push(arraySorted[0]);
      arraySorted.splice(0, 1);
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

module.exports = sortByHeight;
