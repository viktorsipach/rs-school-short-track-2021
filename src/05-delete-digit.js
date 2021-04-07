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
  const arr = n.toString().split('');
  const arrSort = n.toString().split('').sort((a, b) => a - b);
  const min = arrSort.shift();
  let isRepeatNum = true;
  arr.forEach((el, idx) => {
    if (el === min && isRepeatNum) {
      arr[idx] = '';
      isRepeatNum = false;
    }
  });
  return +arr.join('');
}

module.exports = deleteDigit;
