import { getMin, getParent, getParentIndex, getLeftChildIndex, getLeftChild, getRightChildIndex, getRightChild } from "../../lib/min-heap-functions.js";

describe("test get min", () => {
  it("should return 10 as the root is the minimum in the tree", () => {
    const heap = [10, 20, 30];
    const results = getMin(heap);

    expect(results).toBe(10);
  });
});

describe("test get parent index", () => {
  it("should return 4 as the current index is 10", () => {
    const results = getParentIndex(10);

    expect(results).toBe(4);
  });
  it("should return 4 as the current index is 9", () => {
    const heap = [1, 2, 6, 5, 9, 8];
    const results = getParentIndex(9);

    expect(results).toBe(4);
  });
});

describe("test get parent", () => {
  it("should return 3", () => {
    const heap = [1, 3, 6, 5, 9, 8];
    const results = getParent(heap, 3);

    expect(results).toBe(3);
  });
});

describe("test get left child index", () => {
  it("should return 13 as the current index is 6", () => {
    const index = 6;
    const expectedResult = 2 * index + 1;
    const results = getLeftChildIndex(index);

    expect(results).toBe(expectedResult);
  });
});

describe("test get left child", () => {
  it("should return 3 as the current index is 0", () => {
    const heap = [1, 3, 6, 5, 9, 8];

    const index = 0;
    const results = getLeftChild(heap, index);

    expect(results).toBe(3);
  });
});


describe("test get right child index", () => {
  it("should return 14 as the current index is 6", () => {
    const index = 6;
    const expectedResult = 2 * index + 2;
    const results = getRightChildIndex(index);

    expect(results).toBe(expectedResult);
  });
});

describe("test get right child", () => {
  it("should return 6 as the current index is 0", () => {
    const heap = [1, 3, 6, 5, 9, 8];

    const index = 0;
    const results = getRightChild(heap, index);

    expect(results).toBe(6);
  });
});
