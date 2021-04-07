/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = [];
  matrix.forEach((arr, index) => {
    arr.forEach((item, idx) => {
      if (matrix[index - 1]) {
        if (matrix[index - 1][idx]) {
          result.push(item);
        } else {
          result.push(0);
        }
      } else {
        result.push(item);
      }
    });
  });
  return result.reduce((a, b) => a + b);
}

module.exports = getMatrixElementsSum;
