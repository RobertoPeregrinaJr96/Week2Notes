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
for (let keys in obj) {
    // by using the for in loop we can
    console.log(keys)
    // similar to accessing elements in a array; we can
    let value = obj[keys]
    console.log(value)
}












console.log("--------------------------------------------------")
console.log("Iterating through Objects")
/*
when iterating through a object we have to becareful as objects are unordered in theyre indices
-for in loop targets the keys in the and iterate through every key
*/

for (let keys in obj) {
    console.log(keys)
    // we can assign values to variable the same way we attach array[index]
    let value = obj[keys]
    console.log(value)
}
// try not to iterate a object with a for of loop
// for(let keys of obj){      // TypeError: obj is not iterable
//     console.log(keys)
// }
console.log("--------------------------------------------------")
console.log("Iterating through Arrays")
/*
for of helps shorthand a for loop
-for of loop targets the elements in array and iterate through every element
*/
let arr = [1, 2, 3, 4, 5]

for (let element of arr) {
    console.log(element)
}
// when using a for in loop on a array the element isnt returned but the indices is
for (let element in arr) {
    console.log(element)
}
