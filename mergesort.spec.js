describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here
    let arrayToBeSplit = [1, 2, 3, 4, 5];
    let resultOfSplit = split(arrayToBeSplit);
    expect(resultOfSplit.length).toEqual(2);
    expect(resultOfSplit[0]).toEqual([1, 2, 3]);
    expect(resultOfSplit[1]).toEqual([4, 5]);

  });

  it("handles empty array", function () {
    let resultOfSplit = split([]);
    expect(resultOfSplit[0]).toEqual([]);
    expect(resultOfSplit[1]).toEqual([]);
  });
  it("handles a singleton array", function () {
    let resultOfSplit = split([1]);
    expect(resultOfSplit[0]).toEqual([1]);
    expect(resultOfSplit[1]).toEqual([]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    let firstSortedArray = [1, 2, 3, 4, 5, 6];
    let secondSortedArray = [1, 3, 5, 7];
    expect(merge(firstSortedArray, secondSortedArray)).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 6, 7]);
  });
});

describe("MergeSort function", function () {
  it("sorts the array", function () {
    let array = [4, 2, 7, 8, 1];
    expect(mergeSort(array)).toEqual([1, 2, 4, 7, 8]);
  })
  it("sorts another array", function () {
    let array = [2, 3, 1];
    expect(mergeSort(array)).toEqual([1, 2, 3]);
  })
});

