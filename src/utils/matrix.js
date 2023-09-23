import {
  fillWithZeros,
  replaceRandomZero,
  sortZeros,
  sumAdjacentEqualValues,
} from './array';

/**
 * Generates a square matrix of a given size, filled with zeros.
 *
 * @param {number} size - The size of the matrix to generate.
 * @returns {Array<Array<number>>} The generated matrix.
 */
export function generateMatrix(size) {
  const matrix = [];

  for (let i = 0; i < size; i++) {
    matrix.push(new Array(size).fill(0));
  }

  return matrix;
}

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
  let turnScore = 0;

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
    if (!row.includes(0)) {
      return;
    }

    matrix[rowIndex] = sortZeros(matrix[rowIndex]);
    const [sumArray, score] = sumAdjacentEqualValues(matrix[rowIndex]);
    matrix[rowIndex] = fillWithZeros(sumArray, matrix.length);

    if (direction === 'right') {
      matrix[rowIndex] = sortZeros(matrix[rowIndex], 'right');
    }

    turnScore += score;
  });

  // After the matrix has been shifted, rotate it back if needed.
  if (direction === 'down') {
    matrix = rotateMatrix(matrix, 'counter-clockwise');
  }

  if (direction === 'up') {
    matrix = rotateMatrix(matrix, 'clockwise');
  }

  return [matrix, turnScore];
};

/**
 * Returns true if there are no zeros in the matrix, false otherwise.
 *
 * @param {Array<Array<number>>} matrix - The matrix to check.
 * @returns {boolean} True if there are no zeros in the matrix, false otherwise.
 */

export function noZerosInMatrix(matrix) {
  if (matrix === undefined) {
    throw new Error('Matrix is undefined.');
  }

  return matrix.every(row => !row.includes(0));
}
