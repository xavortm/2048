import { describe, expect, it, test } from "vitest";

import { generateMatrix, rotateMatrix, shiftAndSumMatrix } from "./matrix";

describe("generateMatrix", () => {
  test.each([
    [0, []],
    [1, [[0]]],
    [2, [[0, 0], [0, 0]]],
    [3, [[0, 0, 0], [0, 0, 0], [0, 0, 0]]],
  ])("generates a matrix of a given size", (size, expected) => {
    const result = generateMatrix(size);
    expect(result).toEqual(expected);
  });
});

describe("rotateMatrix", () => {
  it("rotates a matrix 90 degrees clockwise", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ];

    const result = rotateMatrix(matrix);
    expect(result).toEqual(expected);
  });

  it("rotates a matrix 90 degrees counter-clockwise", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ];

    const result = rotateMatrix(matrix, "counter-clockwise");
    expect(result).toEqual(expected);
  });

  it("throws an error if matrix is undefined", () => {
    expect(() => rotateMatrix()).toThrow("Matrix is undefined.");
  });

  it("throws an error if matrix is not square", () => {
    expect(() => rotateMatrix([[1, 2, 3], [4, 5, 6]])).toThrow(
      "Matrix must be square."
    );
  });
});

describe("shiftAndSumMatrix", () => {
  it("shifts a matrix left and sums adjacent equal values", () => {
    const matrix = [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 16, 32, 0],
    ];

    const expected = [
      [4, 0, 0, 0],
      [2, 0, 0, 0],
      [2, 0, 0, 0],
      [16, 32, 0, 0],
    ];

    const [result, score] = shiftAndSumMatrix(matrix, "left");
    expect(result).toEqual(expected);
  });

  it("shifts a matrix right and sums adjacent equal values", () => {
    const matrix = [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 16, 32, 0],
    ];

    const expected = [
      [0, 0, 0, 4],
      [0, 0, 0, 2],
      [0, 0, 0, 2],
      [0, 0, 16, 32],
    ];

    const [result, score] = shiftAndSumMatrix(matrix, "right");
    expect(result).toEqual(expected);
  });

  it("shifts a matrix up and sums adjacent equal values", () => {
    const matrix = [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 16, 32, 0],
    ];

    const expected = [
      [4, 4, 32, 0],
      [0, 16, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    const [result, score] = shiftAndSumMatrix(matrix, "up");
    expect(result).toEqual(expected);
  });

  it("shifts a matrix down and sums adjacent equal values", () => {

    const matrix = [
      [2, 2, 0, 0],
      [0, 2, 0, 0],
      [2, 0, 0, 0],
      [0, 16, 32, 0],
    ];

    const expected = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 4, 0, 0],
      [4, 16, 32, 0],
    ];

    const [result, score] = shiftAndSumMatrix(matrix, "down");
    expect(result).toEqual(expected);
  });
});
