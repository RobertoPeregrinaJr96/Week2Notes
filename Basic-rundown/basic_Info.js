/*
---------------> node Basic-rundown/basic_info.js <--------------
*/

console.log("Arrow function Syntax")

// ----> Regular Syntax <----
// function sum(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         let element = arr[i];
//         sum += element
//     }
//     return sum
//}

// ----> Arrow function <----

// we can omit most of the fluff ; first we declare a variable using the const,let(you can use var or no keyword at all but thats a can of worms left alone)
const sum = (arr) => {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]))

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
// when using a for in loop on a array the element isn't returned but the indices is
for (let element in arr) {
    console.log(element)
}
console.log("--------------------------------------------------")

console.log("Rest Syntax")

const allTheArg = (...args) => {
    for (let arg of args) {
        console.log(arg)
    }
}

allTheArg(1, 2, 3, 4, 5, 6, 76, 435, 3233)

console.log("Spread Operator")

const spreadItAll = (arr) => {
    let newArr = ["a", "b", "c", "d"]
    newArr += [,...arr]
    return newArr
}

console.log(spreadItAll([1, 2, 3, 4, 5]))

console.log("--------------------------------------------------")

console.log("Primitive Type")
// Primitive types are immutable as they *POINTS* to the value present in the computer's memory

console.log(true) // boolean type can only be true or false
console.log(null) // num is the absence? of? memory? its either that there is no value or value was not there yet
console.log(undefined) // undefined points to the absence of memory
console.log(1,2,3,4,5) // number data type points to a place in memory where the value is at
console.log("string") // string data type points to the place in memory where the value is store at

console.log("--------------------------------------------------")
console.log("Reference Type")
// Reference type are mutable data types that reference the same place in the computer's memory where the value can be reassigned
let obj1 = { a: 1, b: 2, c: 3, d: 4 }
console.table(obj1)
// arrays are also considered objects
console.table(arr)
console.log("--------------------------------------------------")
