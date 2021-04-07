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
  const count = {};
  const res = [];
  const arr = str.split('');
  arr.forEach((el) => {
    count[el] = 1;
  });
  arr.forEach((el, index) => {
    if (el === arr[index + 1]) {
      count[el] += 1;
    } else {
      res.push(`${count[el]}${[el]}`);
    }
  });
  res.forEach((el, index) => {
    if (el.slice(0, 1) === '1') {
      res[index] = el.slice(-1);
    }
  });
  return res.join('');
}

module.exports = encodeLine;
