import {
  fillWithZeros,
  sortZeros,
  sumAdjacentEqualValues,
  replaceRandomZero
} from './array';

import { randomInt } from './random';

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

  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  if (direction === 'clockwise') {
    return matrixCopy[0].map((val, index) => matrixCopy.map(row => row[index]).reverse());
  }

  return matrixCopy[0].map((val, index) => matrixCopy.map(row => row[row.length - 1 - index]));

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
  if (matrix.length !== matrix[0].length) {
    throw new Error('Matrix must be square.');
  }

  let matrixCopy = JSON.parse(JSON.stringify(matrix));
  let turnScore = 0;

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

export function replaceRandomZeroMatrix(matrix) {
  let matrixCopy = JSON.parse(JSON.stringify(matrix));

  let rowsWithZero = [];
  for (let i = 0; i < matrixCopy.length; i++) {
    if (matrixCopy[i].includes(0)) {
      rowsWithZero.push(i);
    }
  }

  const randomRow = rowsWithZero[randomInt(0, rowsWithZero.length - 1)];
  matrixCopy[randomRow] = replaceRandomZero(matrixCopy[randomRow]);

  return matrixCopy;
}

export function noValidMoves(matrix) {
  for (let row = 0; row < matrix.length - 1; row++) {
    for (let col = 0; col < matrix.length - 1; col++) {
      if (matrix[row][col] === 0) {
        return false;
      }
      if (matrix[row][col] === matrix[row + 1][col] || matrix[row][col] === matrix[row][col + 1]) {
        return false;
      }
    }
  }

  return true;
}
