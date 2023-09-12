import { generateRandomNumber } from './random';

/**
 * Swaps two elements in an array.
 *
 * @param {Array} array - The array to modify.
 * @param {number} index1 - The index of the first element to swap.
 * @param {number} index2 - The index of the second element to swap.
 * @returns {Array} The modified array.
 *
 * @example
 * const array = [1, 2, 3, 4];
 * const swappedArray = swapInArray(array, 1, 3);
 * // swappedArray is [1, 4, 3, 2]
 */
export function swapInArray(array, index1, index2) {
  const newArray = [...array];
  const temp = newArray[index1];
  newArray[index1] = newArray[index2];
  newArray[index2] = temp;

  return newArray;
}

/**
 * Sorts an array so that all the zeros are at the end.
 *
 * @param {Array} array - The array to sort.
 * @returns {Array} The sorted array.
 *
 * @example
 * const array = [1, 0, 3, 0, 2];
 * const sortedArray = sortZeros(array);
 * // sortedArray is [1, 3, 2, 0, 0]
 */
export function sortZeros(array) {
  const zeros = array.filter((num) => num === 0);
  const nonZeros = array.filter((num) => num !== 0);
  return [...nonZeros, ...zeros];
}

/**
 * Sums adjacent equal values in an array.
 *
 * @param {Array} array - The array to modify.
 * @returns {Array} The modified array.
 *
 * @example
 * const array = [1, 1, 2, 3, 3, 3, 4];
 * const summedArray = sumAdjacentEqualValues(array);
 * // summedArray is [2, 2, 6, 4]
 */
export function sumAdjacentEqualValues(array) {
  const newArray = [];
  let summed = 0;

  let i = 0;
  while (i < array.length) {
    if (array[i] === array[i + 1]) {
      summed += array[i] + array[i + 1];
      newArray.push(summed);
      i += 2;
    } else {
      newArray.push(array[i]);
      i += 1;
    }
  }
  return [newArray, summed];
}

/**
 * Fills an array with zeros up to a given length after the last non-zero value.
 *
 * @param {Array} array - The array to modify.
 * @param {number} length - The length to fill the array up to.
 * @returns {Array} The modified array.
 *
 * @example
 * const array = [1, 2, 0, 4];
 * const filledArray = fillWithZeros(array, 6);
 * // filledArray is [1, 2, 0, 4, 0, 0]
 */
export function fillWithZeros(array, length) {
  const newArray = [...array];

  while (newArray.length < length) {
    newArray.push(0);
  }

  return newArray;
}

/**
 * Replaces a random zero in an array with a 2 or 4.
 * If there are multiple zeros in the array, one is chosen at random to be replaced.
 *
 * @param {Array} array - The array to modify.
 * @returns {Array} The modified array.
 */
export function replaceRandomZero(array) {
  if (!array.includes(0)) {
    return array;
  }

  while (true) {
    const randomIndex = Math.floor(Math.random() * array.length);

    if (array[randomIndex] === 0) {
      array[randomIndex] = generateRandomNumber();
      break;
    }
  }

  return array;
}
