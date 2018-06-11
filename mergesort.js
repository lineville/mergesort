function split(arr) {
  // splits the array into two arrays
  // right array will take extra element if uneven
}

// function merge() {
//   // merges two sorted arrays into one sorted array
// }

// function mergeSort() {

// }


// // mergesort scratchpad

// function merge(arr, low, mid, high) {
//   let leftLength = mid - low + 1;
//   let rightLength = high - mid;

//   // create arrays to store each half using the lengths above
//   let left = new Array(leftLength + 1);
//   let right = new Array(rightLength + 1);
//   let leftMarker = 0;
//   let rightMarker = 0;

//   for (let i = 0; i < leftLength; i++) { // fill left array
//     left[i] = arr[low + i];
//   }

//   for (let i = 0; i < rightLength; i++) { // fill right array
//     right[i] = arr[mid + 1 + i];
//   }

//   // place largest number on the end of both arrays
//   right[rightLength] = Number.MAX_VALUE;
//   left[leftLength] = Number.MAX_VALUE;

//   for (let i = 0; i <= high; i++) {
//     if (left[leftMarker] <= right[rightMarker]) {
//       arr[i] = left[leftMarker];
//       leftMarker++;
//     } else {
//       arr[i] = right[rightMarker];
//       rightMarker++;
//     }
//   }

// }

// function mergeHelper(arr, low, high) {
//   if (low < high) {
//     let mid = (low + high) / 2;
//     mergeHelper(arr, low, mid);
//     mergeHelper(arr, mid + 1, high);
//     merge(arr, low, mid, high);
//   }
// }

// function mergesort(arr) {
//   return mergeHelper(arr, 0, arr.length - 1);
// }

