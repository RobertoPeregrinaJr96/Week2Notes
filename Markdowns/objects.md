**- for a better format pls right click the tab or file and select preview -**

```js
/*
POJO
P(lain)  O(ld)  J(avaScript)  O(bject)
Objects are data structures
- in a object are key that are paired with a value coincidentally called a  key-value pair
- a key without a value will by be undefined by default
- Objects are a Reference type which means that the reference a place in the memory
*/
```

```js
let obj = { a: 1, b: 2, c: 3, d: 4 }; //  <-- the keys are the letters and the value are the numbers
console.table(obj);
```

```js
//there are two different ways to access a key in a object
// -- first is what we call *Dot Notation* which we the the object follow with the key and a period separating them
console.log(obj.a);
```

```js
// the other way is called *Bracket Notation* which we use when the key is a variable,assigning a string as key and when a number is the first character  of the key
obj["this is a string"] = "this is the value";
console.log(obj["this is a string"]);
console.table(obj);

obj["2abc"] = 10;
console.log(obj["2abc"]);
console.table(obj);
```

```js
//-------------"Iterating through Objects"---------------
/*
when iterating through a object we have to careful as objects are unordered in they're indices
-for in loop targets the keys in the and iterate through every key
*/
let obj1 = { a: 1, b: 2, c: 3, d: 4 };

for (let keys in obj1) {
  // by using the for in loop we can iterate through the keys of the object
  console.log(keys);
  // similar to accessing elements in a array; we can access the values of keys by our specified key in [] on the right of the object
  let value = obj1[keys];
  console.log(value);
}
// try not to iterate a object with a for of loop
// for(let keys of obj){      // TypeError: obj is not iterable
//     console.log(keys)
// }
```

```js
//--------------"Common Object Methods"-----------------
// obj1 = { a: 1, b: 2, c: 3, d: 4 }
console.log("Object.keys()");
// declare the
const allTheKeys = (obj1) => {
  // by using the Object.keys() method we get back a array of the keys of the object
  const keys = Object.keys(obj1); // ["a","b","c","d"]
  return keys;
};
console.log(allTheKeys(obj1)); // ["a","b","c","d"]

console.log("Object.values()");
const allTheValue = (obj1) => {
  // Object.values works the same as Object.keys() as it returns a array containing all of the values within the object
  const value = Object.values(obj1); // [1,2,3,4]
  return value;
};
console.log(allTheValue(obj1)); // [1,2,3,4]
```

```js
//------------"Destructuring"-------------
// we have a regular object
let obj4 = { a: 1, b: 2, c: 3, d: 4 };
// console.log(a)  //ReferenceError: a is not defined
// console.log(b)  //ReferenceError: b is not defined
// console.log(c)  //ReferenceError: c is not defined
// console.log(d)  //ReferenceError: d is not defined
// we can assign the objects keys as variables
let { a, b, c, d } = obj4;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
console.log(d); // 4
```

```js
//------------"Nested Objects"-------------

let obj5 = {
  apple: { a: 1, p: 2, l: 1, e: 1 },
  banana: { b: 1, a: 3, n: 2 },
  mango: { m: 1, a: 1, n: 1, g: 1, o: 1 },
};

console.table(obj5);

for (let innerObj in obj5) {
  console.log(innerObj); // apple
  console.log(obj5[innerObj]); // { "a": 1, "p": 2, "l": 1, "e": 1 }
  let subObj = obj5[innerObj]; // we assign the sub object to a variable for easier use
  for (let keys in subObj) {
    // now we can iterate through the sub object
    console.log(keys); // prints a then p then  l then e
  }
}
```
