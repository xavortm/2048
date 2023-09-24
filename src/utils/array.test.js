import {
  swapInArray,
  sortZeros,
  sumAdjacentEqualValues,
  fillWithZeros,
  replaceRandomZero,
} from "./array";
import { describe, expect, it, test } from "vitest";

describe("swapInArray", () => {
  test.each([
    [[1, 2, 3, 4], 0, 3, [4, 2, 3, 1]],
    [[1, 2, 3, 4], 1, 2, [1, 3, 2, 4]],
    [[1, 2, 3, 4], 2, 1, [1, 3, 2, 4]],
    [[1, 2, 3, 4], 3, 0, [4, 2, 3, 1]],
  ])("swaps two elements in an array", (array, index1, index2, expected) => {
    const result = swapInArray(array, index1, index2);
    expect(result).toEqual(expected);
  });
});

describe("sumAdjacentEqualValues", () => {
  test.each([
    [
      [0, 0, 0, 0],
      [0, 0],
    ],
    [
      [2, 2, 0, 0],
      [4, 0],
    ],
    [
      [8, 2, 0, 0],
      [8, 2, 0],
    ],
    [
      [8, 2, 2, 0],
      [8, 4, 0],
    ],
    [
      [8, 2, 2, 2],
      [8, 4, 2],
    ],
    [
      [2, 2, 2, 2],
      [4, 4],
    ],
    [
      [0, 2, 0, 2],
      [0, 2, 0, 2],
    ],
    [
      [2, 0, 0, 2],
      [2, 0, 2],
    ],
    [
      [0, 0, 0, 2],
      [0, 0, 2],
    ],
    [
      [16, 4, 4, 4],
      [16, 8, 4],
    ],
  ])("sums adjacent equal values in an array", (array, expected) => {
    const [result, sum] = sumAdjacentEqualValues(array);
    expect(result).toEqual(expected);
  });
});

describe("sortZeros", () => {
  test.each([
    [
      [1, 0, 3, 0, 2],
      [1, 3, 2, 0, 0],
    ],
    [
      [0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0],
    ],
    [
      [2, 0, 0, 0, 1],
      [2, 1, 0, 0, 0],
    ],
    [
      [0, 0, 3, 0, 2],
      [3, 2, 0, 0, 0],
    ],
    [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ],
    [
      [1, 2, 3, 0],
      [1, 2, 3, 0],
    ],
    [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    [[], []],
  ])(
    "sorts an array so that all the zeros are at the end",
    (array, expected) => {
      const result = sortZeros(array);
      expect(result).toEqual(expected);
    }
  );
});

describe("fillWithZeros", () => {
  test.each([
    [[1, 2], 5, [1, 2, 0, 0, 0]],
    [[1, 2], 2, [1, 2]],
    [[0, 0], 2, [0, 0]],
    [[0, 2], 2, [0, 2]],
    [[0, 2], 10, [0, 2, 0, 0, 0, 0, 0, 0, 0, 0]],
  ])("fills an array with zeros", (array, length, expected) => {
    const result = fillWithZeros(array, length);
    expect(result).toEqual(expected);
  });
});

describe("replaceRandomZero", () => {
  it("replaces only available zero", () => {
    const array = [1, 2, 0, 4];
    const result = replaceRandomZero(array);
    expect(result).not.toContain(0);
  });

  it("replaces any random zero", () => {
    const array = [0, 2, 0, 4];
    const result = replaceRandomZero(array);

    expect(result[0] !== 0 || result[2] !== 0).toBe(true);
  });
});
