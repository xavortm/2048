/**
 * Generates a random number between 1 and 100.
 *
 * @returns {number} The generated random number.
 */
export function generateRandomPlayingNumber() {
  const randomNumber = Math.random() < 0.75 ? 2 : 4; // 75% chance of 2, 25% chance of 4

  return randomNumber;
}

export function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}
