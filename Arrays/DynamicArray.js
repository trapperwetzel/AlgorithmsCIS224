class DynamicArray {
  constructor(capacity) {
    this.capacity = capacity;
    this.arr = this.makeArray(this.capacity);
    this.elementCount = 0;
  }
  makeArray(capacity) {
    return new Int32Array({ length: capacity });
  }
  push(element) {
    if (this.elementCount != this.capacity) {
      this.arr[this.elementCount] = element;
      this.elementCount += 1;
    }
  }
  doubleArray() {
    const newLength = this.arr.length * 2;
    const newArray = this.makeArray(newLength);
    for (let i = 0; i < this.arr.length; i++) {
      newArray[i] = this.arr[i];

    }
    this.arr = newArray;
  }
}

const dynamicArray = new DynamicArray(4);
console.log(dynamicArray);
console.log("After push");
dynamicArray.push(1);
console.log(dynamicArray);
dynamicArray.doubleArray();
console.log("After double");
console.log(dynamicArray);
console.log("Pushing into the doubled Array");
dynamicArray.push(2);
console.log(dynamicArray);

