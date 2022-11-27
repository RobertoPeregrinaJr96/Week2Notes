/*
---------------> node objects.js <--------------
POJO
P(lain)  O(ld)  J(avaScript)  O(bject)
Objects are data structures
-in a object are key that are paired with a value coincidentally called a    key-value pair
- a key without a value will by be undefined by default
-Objects are a Reference type which means that the reference a place in the memory
*/


let obj = { a: 1, b: 2, c: 3, d: 4 }//  <-- the keys are the letters and the value are the numbers
console.table(obj)
//there are two different ways to access a key in a object
// -- first is what we call *Dot Notation* which we the the object follow with the key and a period separating them
console.log(obj.a)

// the other way is called *Bracket Notation* which we use when the key is a variable,assigning a string as key and when a number is the first character  of the key

obj["this is a string"] = "this is the value"
console.log(obj["this is a string"])
console.table(obj)


obj["2abc"] = 10
console.log(obj["2abc"])
console.table(obj)

console.log("--------------------------------------------------")

let obj1 = { a: 1, b: 2, c: 3, d: 4 }

for (let keys in obj1) {
    // by using the for in loop we can iterate through the keys of the object
    console.log(keys)
    // similar to accessing elements in a array; we can access the values of keys by our specified key in [] on the right of the object
    let value = obj1[keys]
    console.log(value)
}
console.log("--------------------------------------------------")
// obj1 = { a: 1, b: 2, c: 3, d: 4 }
console.log("Iterating through Objects")
/*
when iterating through a object we have to careful as objects are unordered in theyre indices
-for in loop targets the keys in the and iterate through every key
*/

for (let keys in obj1) {
    console.log(keys)
    // we can assign values to variable the same way we attach array[index]
    let value = obj1[keys]
    console.log(value)
}
// try not to iterate a object with a for of loop
// for(let keys of obj){      // TypeError: obj is not iterable
//     console.log(keys)
// }

console.log("--------------------------------------------------")

console.log("Common Object Methods")
// obj1 = { a: 1, b: 2, c: 3, d: 4 }
console.log("Object.keys()")
// declare the
const allTheKeys = (obj1) => {
    // by using the Object.keys() method we get back a array of the keys of the object
    const keys = Object.keys(obj1) // ["a","b","c","d"]
    return keys
}
console.log(allTheKeys(obj1))// ["a","b","c","d"]

console.log("Object.values()")
const allTheValue = (obj1) => {
    // Object.values works the same as Object.keys() as it returns a array containing all of the values within the object
    const value = Object.values(obj1) // [1,2,3,4]
    return value
}
console.log(allTheValue(obj1)) // [1,2,3,4]

console.log("--------------------------------------------------")
