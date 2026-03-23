let arr1 = [2,3,4,5,6];

// Push Method() -> Element insert at last index of Array 'arr.length-1'
Array.prototype.धकेलना = function (...value) {
  for (let key of value) {
    this[this.length] = key;
  }
  return this.length;
};
// let ans = arr1.धकेलना(8, 9, 10);
// console.log(ans);
// console.log(arr1)

// Pop Method() -> Element delete at Last index of Array 'arr.length-1'
Array.prototype.निकालो = function () {
  if (this.length > 0) {
    delete this[this.length - 1];
    this.length = this.length - 1;
  }
};
// arr1.निकालो();
// console.log(arr1);

// Shift Method() -> Element delete at First index of Array 'arr[0]'
//  arr1.shift()
Array.prototype.बदलाव = function () {
  if(this.length === 0){
    return undefined;
  }
  const firstEle = this[0];
  for(let i = 0; i < this.length - 1; i++){
    this[i] = this[i + 1];
  }
  this.length = this.length - 1;

  return firstEle;
}
// arr1.बदलाव();
// console.log(arr1);

// Unshift Method() -> Element insert at First index of Array 'arr[0]'
// arr1.unshift(1);

// Prototype Code अनशिफ्ट
// Array.prototype.अनशिफ्ट = function () {
  
// }

// console.log(arr1)

// Reverse Method() -> reverse whole array
// Prototype code रिवर्स
// arr1.reverse();
Array.prototype.रिवर्स = function () {
  let left = 0;
  let right = this.length - 1;
  while (left < right) {
    let temp = this[left];
    this[left] = this[right];
    this[right] = temp;
    left++;
    right--;
  }
return this;
}
// arr1.रिवर्स();
// console.log(arr1);

// toString Method() 
// console.log(typeof arr1);
// console.log(arr1.toString());
// console.log(typeof arr1.toString());
// prototype code स्ट्रिंग
// if (!Array.prototype.स्ट्रिंग) {
  Array.prototype.स्ट्रिंग = function() {
    // 'this' refers to the array instance on which the method is called.
    // The native toString() calls join() internally with no arguments, 
    // which defaults to using a comma as a separator.
    return this.join(); 
  };
// }
console.log(typeof arr1);
console.log(arr1.स्ट्रिंग());
console.log(typeof arr1.स्ट्रिंग());
