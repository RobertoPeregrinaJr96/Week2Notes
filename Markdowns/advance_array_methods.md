**- for a better format pls right click the tab or file and select preview -**

the simplest explanation of advance array function is that they are methods that have a function within their parentheses for one sole purpose

```js
//------------------".forEach"----------------

const multiplyWithForEach = (array) => {
  let sum = 1;
  array.forEach((num) => (sum *= num));
  return sum;
};

console.log(multiplyWithForEach([1, 2, 3, 4, 5])); // 120
```

```js
//---------------".reduce"---------------
/*
Array method .reduce iterates through a array with the sole purpose of reducing the array by whatever method you chose by calculating the method on the preceding element before moving to the next element.we can also assign a accumulator after the functions curly braces with a coma as our starting point

*/
const additionWithReduce = (nums, accumulator) => {
  // we will save the result of *nums.reduce()* to the variable *result*
  let result = nums.reduce((num, num1) => {
    //
    let sum = num + num1;
    return sum;
  }, accumulator); // our accumulator parameter(which isn't needed) is where our sum variable is added to
  return result;
};
console.log(additionWithReduce([10, 3, 5, 2], 100)); // 120
console.log(additionWithReduce([4, 3], 42)); // 49
```

```js
//------------".filter"---------------
// filter method will basically iterate through the array and will check if it will pass a conditional is within the parentheses
const wordsWithFilter = (array) => {
  // our filters conditional checks if the words length is less then 6
  let result = array.filter((word) => word.length < 6);
  return result;
};

console.log(
  wordsWithFilter([
    "dragon fruit",
    "olives",
    "avocados",
    "apple-pen",
    "blueberry",
    "strawberry",
    "orange",
    "mango",
    "pineapple",
    "apple",
  ])
); // [ 'mango', 'apple' ]

const mod2 = (array) => {
  // our filter will check if a number is even
  let result = array.filter((num) => num % 2 === 0);
  return result;
};

console.log(mod2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2,4,6,8,10]
```

```js
//-------------".map"--------------------
// will return a shallow copy of an array
// will still iterate through the array

const divideBy4 = (array) => {
  let result = array.map((num) => num / 4);
  return result;
};

console.log(divideBy4([4, 8, 12, 16])); //  [1,2,3,4]
```

```js
//-------------------".find"---------------------
// will iterate through the array and will come back with the first instance that satisfies the condition

const find4 = (array) => {
  let result = array.find((num) => num === 4);
  return result;
};

console.log(
  find4([5, 6, 81, 12, 5747, 4687894, 3, 454, 2, 1, 4, 8, 5, 3, 3, 3, 3, 3])
); // 4
```
