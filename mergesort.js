function split(arr) {
  // splits the array into two arrays
  // right array will take extra element if uneven

  let halfPoint = Math.ceil(arr.length / 2);
  let leftArray = arr.slice(0, halfPoint);
  let rightArray = arr.slice(halfPoint);
  return [leftArray, rightArray];
}

function merge(leftArray, rightArray, comparator) { //[2,3], [1]
  // merges two sorted arrays into one sorted array
  if (!comparator){
    comparator = (a, b) => {
      return a < b;
    }
  }

  let leftPointer = 0;
  let rightPointer = 0;
  let result = [];
  while (leftPointer < leftArray.length || rightPointer < rightArray.length) {

    let leftValue = leftArray[leftPointer];
    let rightValue = rightArray[rightPointer];
    if ( leftValue && ( !rightValue || comparator(leftValue, rightValue) ) ) {
      result.push(leftValue);
      leftPointer += 1;
    } else {
      result.push(rightValue);
      rightPointer += 1;
    }
  }
  return result;
}

function mergeSort(arrayToBeSorted, comparator ) {

  if (arrayToBeSorted.length <= 1) {
    return arrayToBeSorted;
  }

  let temp = split(arrayToBeSorted);
  let leftArray = temp[0];
  let rightArray = temp[1];

  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);

  return merge(sortedLeftArray, sortedRightArray, comparator);
}
