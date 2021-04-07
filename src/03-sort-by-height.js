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
  const arrRes = [];
  const arrNum = arr.filter((el) => el !== -1);
  arrNum.sort((a, b) => a - b);
  let counter = 0;
  arr.forEach((el, idx) => {
    if (el === -1) {
      arrRes.push(-1);
      counter += 1;
    } else {
      arrRes.push(arrNum[idx - counter]);
    }
  });
  return arrRes;
}

module.exports = sortByHeight;
