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
  // if no comparator was provided assign the default comparison
  if (!comparator){
    comparator = (a, b) => {
      return a < b;
    };
  }

  let leftPointer = 0; // points to current element in left array
  let rightPointer = 0; // points to current element in right array
  let result = []; // resulting merged array
  // while we still have remaining elements in the left or right
  while (leftPointer < leftArray.length || rightPointer < rightArray.length) {
    // get the values at left and right pointers
    let leftValue = leftArray[leftPointer];
    let rightValue = rightArray[rightPointer];
    // if there is a left value and the left is smaller or there is no right value then push the left and move pointer
    if ( leftValue && ( !rightValue || comparator(leftValue, rightValue) ) ) {
      result.push(leftValue);
      leftPointer += 1;
    } else { // otherwise push the right value and move pointer
      result.push(rightValue);
      rightPointer += 1;
    }
  }
  return result;
}

function mergeSort(arrayToBeSorted, comparator ) {
  // Base Case: we have split into arrays of length 1
  if (arrayToBeSorted.length <= 1) {
    return arrayToBeSorted;
  }
  // split the array into two arrays using split
  let temp = split(arrayToBeSorted);
  let leftArray = temp[0];
  let rightArray = temp[1];
  // mergeSort recursively on left and right arrays
  let sortedLeftArray = mergeSort(leftArray);
  let sortedRightArray = mergeSort(rightArray);
  // return the merge of the two sorted arrays using comparator
  return merge(sortedLeftArray, sortedRightArray, comparator);
}
