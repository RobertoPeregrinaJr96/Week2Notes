/*
---------------> node Basic-rundown/closures.js <--------------
*/

function sundaeOrder() {
    // we have our container that we will add on
    let str = "A bowl of ice cream with hot fudge"
    // we will return a anonymous function with the parameter of topping that is represented as *sundae*
    return function (topping) {
        // console.log(topping) // nuts then caramel
        // since the we are within the function scope of *sundaeOrder* we can access the variable *str* and our *topping* argument to the string
        // after reassigning the *str* variable it will be saved to the *sundae* scope
        str += " and " + topping
        //  console.log(str)
        return str
    };

}

let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"

/*
1 ) the function sundae2 will be invoked
2 ) the function sundae will run since its assigned to sundae 2
3 ) since sundae inside is inside a function we have to return a function
4 ) the returned function will hold the arguments that sundae2 passed through(toppings)
5 ) once we have the arguments ,now we can manipulate what we need to get back what we want which is have our string concat with the argument
*/


//----------------------------------------------------
const sums = () => {
    let sum = 0  // this is our container
    return function (...nums) { // we are returning a function
        // console.log(nums)  // [1,2,3,4,5,6,7,8,9,10]
        for (let num of nums) { // iterating the nums array
            sum += num // we are adding num to our container
        }
        return sum // we return our container
    }

}


let sumOfNums = sums();
console.log(sumOfNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
//----------------------------------------------------
const curriedSum = (numArgs) => {
    if (numArgs <= 0) return null
    const newArray = [];
    function curry(num) {
        newArray.push(num)
        if (newArray.length === numArgs) {
            let total = 0;
            newArray.forEach(n => {
                total += n;
            })
            return total
        } else {
            return curry
        }
    }
    return curry
}
/*
- we declare the function *curriedSum* with the parameter of numArgs
const curriedSum = (numArgs) => {
 -   we set a conditional that checks if numArgs is less than 0 and if true then we return null
    if (numArgs <= 0) return null
  -  we initialize a container *newArray*
    const newArray = [];
   - we declare a new function curry that takes a parameter of num
    function curry(num) {
    -    we will push the num in our container
        newArray.push(num);
    -   lets check if our container is the same length as our original argument(numArgs)
        if (newArray.length === numArgs) {   -if true
        -      we initialize another container
            let total = 0;
        -     we use an advance array method .forEach to iterate through our container *newArray*
            newArray.forEach(n => {
        -        add our n parameter to our container *total*
                total += n;
            })
        -   return our container *total*
            return total
        } else {   - if false
        -  we return curry invoked
            return curry
        }

    }
    return curry   -we keep returning curry
}
*/
const sum = curriedSum(4); // returns a function
console.log(sum(5)) // returns a function: curry
console.log(sum(20)) // returns a function: curry
console.log(sum(30)) // returns a function: curry
console.log(sum(20)); // => returns 75

  // this function can also be invoked like this:
  //const sum = curriedSum(3)(2)(1)(7); // => returns 10
