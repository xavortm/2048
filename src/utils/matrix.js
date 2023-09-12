import {
  fillWithZeros,
  replaceRandomZero,
  sortZeros,
  sumAdjacentEqualValues,
} from './array';

/**
 * Rotate a matrix 90 degrees clockwise or counter-clockwise
 *
 * @param {array} matrix - Must be square matrix
 * @param {string} direction - 'clockwise' or 'counter-clockwise'
 */
export function rotateMatrix(matrix, direction = 'clockwise') {
  if (matrix === undefined) {
    throw new Error('Matrix is undefined.');
  }

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
  let numberWasGenerated = false;

  // Make sure the matrix is a square.
  if (matrix.length !== matrix[0].length) {
    throw new Error('Matrix must be square.');
  }

  // Make sure the direction is valid.
  if (!['up', 'down', 'left', 'right'].includes(direction)) {
    throw new Error('Invalid direction.');
  }

  // If the direction is up or down, rotate the matrix before shifting.
  if (direction === 'down') {
    matrix = rotateMatrix(matrix, 'clockwise');
  }

  if (direction === 'up') {
    matrix = rotateMatrix(matrix, 'counter-clockwise');
  }

  matrix.forEach((row, rowIndex) => {
    matrix[rowIndex] = sortZeros(matrix[rowIndex]);
    matrix[rowIndex] = sumAdjacentEqualValues(matrix[rowIndex]);
    matrix[rowIndex] = fillWithZeros(matrix[rowIndex], matrix.length);

    // If the direction is right, reverse the row.
    if (direction === 'right') {
      matrix[rowIndex] = matrix[rowIndex].reverse();
    }

    if (!numberWasGenerated && matrix[rowIndex].includes(0)) {
      matrix[rowIndex] = replaceRandomZero(matrix[rowIndex]);
      numberWasGenerated = true;
    }
  });

  // After the matrix has been shifted, rotate it back if needed.
  if (direction === 'down') {
    matrix = rotateMatrix(matrix, 'counter-clockwise');
  }

  if (direction === 'up') {
    matrix = rotateMatrix(matrix, 'clockwise');
  }

  console.table(matrix);

  return matrix;
};

