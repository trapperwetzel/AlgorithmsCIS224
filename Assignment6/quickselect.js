function findKLargestO2(arr, k) {
  for (let i = 0; i < k; i++) {
    let maxIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j
      }
    }
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }

  return arr[k - 1];
}


// Given an array nums of distinct integers and an integer k, return the kth largest element in the array. 
// O(nlogn) solution 
function findKLargest(arr, k) {
  const sortedArr = arr.sort((a, b) => (b - a));

  const result = sortedArr[k - 1];
  return result;
}




// O(n) solution using quick select 
function quickselect(arr, k) {
  if (arr.length === 0) {
    return arr[0];
  }

  let randomIndex = Math.floor(Math.random() * arr.length);
  let pivot = arr[randomIndex];

  let less = arr.filter(num => num < pivot);
  let equal = arr.filter(num => num === pivot);
  let more = arr.filter(num => num > pivot);

  if (k <= more.length) {
    return quickselect(more, k);
  } else if (k <= more.length + equal.length) {
    return pivot;
  } else {
    let j = k - more.length - equal.length;
    return quickselect(less, j);
  }
}


function distinctquickselect(arr, k) {

  let randomIndex = Math.floor(Math.random() * arr.length);
  let pivot = arr[randomIndex];

  let less = arr.filter(num => num < pivot);
  let more = arr.filter(num => num > pivot);

  if (k <= more.length) {
    return distinctquickselect(more, k);
  } else if (k === more.length + 1) {
    return pivot;
  } else {
    let j = k - more.length - 1;
    return distinctquickselect(less, j);
  }

}


const distinctTest = [1, 5, 9, 4, 10, 2];
console.log(distinctquickselect(distinctTest, 2));



const test = [1, 1, 5, 5, 5, 32, 9, 9, 9, 9, 3, 4, 12, 11, 55, 45, 22];
console.log(distinctquickselect(test, 2));
console.log(findKLargestO2(test, 2));
console.log(findKLargest(test, 2));
console.log(quickselect(test, 2));
