/**
 * Generates a random number between 1 and 100.
 *
 * @returns {number} The generated random number.
 */
export function generateRandomNumber() {
  const randomNumber = Math.random() < 0.75 ? 2 : 4; // 75% chance of 2, 25% chance of 4

  return randomNumber;
}
