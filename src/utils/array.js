import { generateRandomPlayingNumber, randomInt } from "./random";

/**
 * Swaps two elements in an array.
 *
 * @param {Array} array - The array to modify.
 * @param {number} index1 - The index of the first element to swap.
 * @param {number} index2 - The index of the second element to swap.
 * @returns {Array} The modified array.
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
 */
export function sortZeros(array, direction = "left") {
  const zeros = array.filter((num) => num === 0);
  const nonZeros = array.filter((num) => num !== 0);

  if (direction === "left") {
    return [...nonZeros, ...zeros];
  }

  return [...zeros, ...nonZeros];
}

/**
 * Sums adjacent equal values in an array.
 *
 * @param {Array} array - The array to modify.
 * @returns {Array} The modified array.
 */
export function sumAdjacentEqualValues(array) {
  const newArray = [];
  let summed = 0;

  let i = 0;
  while (i < array.length) {
    if (array[i] === array[i + 1]) {
      summed += array[i] + array[i + 1];
      newArray.push(array[i] + array[i + 1]);
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
  if (array == null || !array.includes(0)) {
    return array;
  }

  while (true) {
    const randomIndex = randomInt(0, array.length - 1);

    if (array[randomIndex] === 0) {
      array[randomIndex] = generateRandomPlayingNumber();
      break;
    }
  }

  return array;
}
