/**
 * Rotate a matrix 90 degrees clockwise or counter-clockwise
 *
 * @param {array} matrix - Must be square matrix
 * @param {string} direction - 'clockwise' or 'counter-clockwise'
 */
export function rotateMatrix(matrix, direction = 'clockwise') {
  // Make sure the matrix is a square.
  if (matrix.length !== matrix[0].length) {
    throw new Error('Matrix must be square.');
  }

  if (direction === 'clockwise') {
    return matrix[0].map((val, index) => matrix.map(row => row[index]).reverse());
  }

  return matrix[0].map((val, index) => matrix.map(row => row[row.length - 1 - index]));

}


/**
 * Shifts the matrix in the given direction and sums
 * adjacent equal values.
 *
 * @param {number[][]} matrix - The matrix to shift.
 * @param {string} direction - The direction to shift the matrix.
 * @returns {number[][]} The shifted matrix.
 */
export function shiftAndSumMatrix(matrix, direction) {
  if (direction === 'none') {
    return matrix;
  }

  const shiftedMatrix = [];

  // Make sure the matrix is a square.
  if (matrix.length !== matrix[0].length) {
    throw new Error('Matrix must be square.');
  }

  // Make sure the direction is valid.
  if (!['up', 'down', 'left', 'right'].includes(direction)) {
    throw new Error('Invalid direction.');
  }

  // If the direction is up or down, rotate the matrix before shifting.
  if (direction === 'up' || direction === 'down') {
    matrix = rotateMatrix(matrix, 'clockwise');
  }

  matrix.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      // First, move all the values to the edge.
      if (column !== 0) {
        if (direction === 'left' || direction === 'right') {
          shiftedMatrix[rowIndex].push(column);
        } else {
          shiftedMatrix[rowIndex].unshift(column);
        }
      }
    });
  });

  // After the matrix has been shifted, rotate it back if needed.
  if (direction === 'up' || direction === 'down') {
    matrix = rotateMatrix(matrix, 'counter-clockwise');
  }
};
