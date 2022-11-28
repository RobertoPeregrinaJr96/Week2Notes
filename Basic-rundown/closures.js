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



const sums = () => {
    let sum = 0  // this is our container
    return function (...nums) { // we are returning a function
        console.log(nums)  // [1,2,3,4,5,6,7,8,9,10]
        for (let num of nums) { // iterating the nums array
            sum += num // we are adding num to our container
        }
        return sum // we return our container
    }

}


let sumOfNums = sums();
console.log(sumOfNums(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
