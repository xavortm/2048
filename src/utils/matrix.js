import {
  fillWithZeros,
  sortZeros,
  sumAdjacentEqualValues,
  replaceRandomZero
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
  let matrixCopy = JSON.parse(JSON.stringify(matrixCopy));

  if (matrixCopy === undefined) {
    throw new Error('Matrix is undefined.');
  }

  // Make sure the matrix is a square.
  if (matrixCopy.length !== matrixCopy[0].length) {
    throw new Error('Matrix must be square.');
  }

  if (direction === 'clockwise') {
    return matrixCopy[0].map((val, index) => matrixCopy.map(row => row[index]).reverse());
  }

  return matrixCopy[0].map((val, index) => matrixCopy.map(row => row[row.length - 1 - index]));

}

/**
 * Shifts the matrix in the given direction and sums
 * adjacent equal values.
 *
 * @param {number[][]} matrixCopy - The matrix to shift.
 * @param {string} direction - The direction to shift the matrix.
 * @returns {number[][]} The shifted matrix.
 */
export function shiftAndSumMatrix(matrix, direction) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));
  let turnScore = 0;

  if (matrixCopy.length !== matrixCopy[0].length) {
    throw new Error('Matrix must be square.');
  }

  if (!['up', 'down', 'left', 'right'].includes(direction)) {
    throw new Error('Invalid direction.');
  }

  if (direction === 'down') {
    matrixCopy = rotateMatrix(matrixCopy, 'clockwise');
  }

  if (direction === 'up') {
    matrixCopy = rotateMatrix(matrixCopy, 'counter-clockwise');
  }


  matrixCopy.forEach((row, rowIndex) => {
    if (!row.includes(0)) {
      return;
    }

    matrixCopy[rowIndex] = sortZeros(matrixCopy[rowIndex]);
    const [sumArray, score] = sumAdjacentEqualValues(matrixCopy[rowIndex]);
    matrixCopy[rowIndex] = fillWithZeros(sumArray, matrixCopy.length);

    if (direction === 'right') {
      matrixCopy[rowIndex] = sortZeros(matrixCopy[rowIndex], 'right');
    }

    turnScore += score;
  });

  if (direction === 'down') {
    matrixCopy = rotateMatrix(matrixCopy, 'counter-clockwise');
  }

  if (direction === 'up') {
    matrixCopy = rotateMatrix(matrixCopy, 'clockwise');
  }

  return [matrixCopy, turnScore];
};

/**
 * Returns true if there are no zeros in the matrix, false otherwise.
 *
 * @param {Array<Array<number>>} matrix - The matrix to check.
 * @returns {boolean} True if there are no zeros in the matrix, false otherwise.
 */
export function noZerosInMatrix(matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  if (matrixCopy === undefined) {
    throw new Error('Matrix is undefined.');
  }

  return matrixCopy.every(row => !row.includes(0));
}

export function replaceRandomZeroMatrix(matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  let rowsWithZero = [];
  for (let i = 0; i < matrixCopy.length; i++) {
    if (matrixCopy[i].includes(0)) {
      rowsWithZero.push(i);
    }
  }

  const randomRow = Math.floor(Math.random() * rowsWithZero.length);
  matrixCopy[randomRow] = replaceRandomZero(matrixCopy[randomRow]);

  return matrixCopy;
}
