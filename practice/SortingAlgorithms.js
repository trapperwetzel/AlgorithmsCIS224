
class SortingAlgorithms {

  constructor(array = [9, 1, 4, 3, 8, 5, 2, 7, 10, 6]) {
    this.array = array;
  };

  bubblesort = (nums) => {
    console.log("Bubble Sort");

    for (let i = 0; i < nums.length; i++) {
      for (let j = 0; j <= nums.length - 1; j++) {
        if (nums[j] > nums[j + 1]) {
          const temp = nums[j];
          nums[j] = nums[j + 1];
          nums[j + 1] = temp;
        }
      }
    }
    return nums;
  }

  selectionsort = (nums) => {
    console.log("Selection Sort");

    for (let i = 0; i < nums.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] < nums[minIndex]) {
          minIndex = j;
        }
      }
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }

    return nums;
  }

  insertionsort = (nums) => {
    console.log("Insertion Sort")


    for (let i = 1; i < nums.length; i++) {
      for (let j = i; j > 0; j--) {
        if (nums[j] < nums[j - 1]) {
          const temp = nums[j];
          nums[j] = nums[j - 1];
          nums[j - 1] = temp;
        }
      }
    }
    return nums;
  }

  mergesort = (nums) => {

    if (nums.length <= 1) {
      return nums;
    }
    const sortHelper = (left, right) => {
      const result = [];
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }
      }

      return [...result, ...left, ...right];
    }

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    return sortHelper(this.mergesort(left), this.mergesort(right));

  }

  quicksort = (nums) => {

    if (nums.length <= 1) {
      return nums;
    }

    const mid = Math.floor(nums.length / 2);
    const pivot = nums[mid];
    const left = [];
    const equal = [];
    const right = [];

    for (let number of nums) {
      if (number < pivot) {
        left.push(number);
      } else if (number > pivot) {
        right.push(number);
      } else {
        equal.push(number);
      }
    }

    return [...this.quicksort(left), ...equal, ...this.quicksort(right)];
  }
}


const test = new SortingAlgorithms();

console.log("----------------");
console.log("----------------\n", test.bubblesort(test.array));
console.log("----------------");
console.log("----------------\n", test.selectionsort(test.array));
console.log("----------------");
console.log("----------------\n", test.insertionsort(test.array));
console.log("----------------\nMerge Sort");
console.log("----------------\n", test.mergesort(test.array));
console.log("----------------\nQuick Sort");
console.log("----------------\n", test.quicksort(test.array));

export default SortingAlgorithms;
