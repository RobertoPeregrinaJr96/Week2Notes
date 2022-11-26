


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

// we can ommite most of the fluff ; first we declare a variable using the const,let(you can use var or no keyword at all but thats a can of worms left alone)
const sum = (arr) => {
    let sum = 0;
    for (let element of arr) {
        sum += element;
    }
    return sum;
}

console.log(sum([1, 2, 3, 4, 5]))
