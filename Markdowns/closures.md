**- for a better format pls right click the tab or file and select preview -**


```js
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
```

```js
let sundae = sundaeOrder(); // => returns a function
console.log(sundae("nuts")) // => "A bowl of ice cream with hot fudge and nuts"
console.log(sundae("caramel")) // => "A bowl of ice cream with hot fudge and nuts and caramel"

let sundae2 = sundaeOrder(); // => returns a function
console.log(sundae2("banana")) // => "A bowl of ice cream with hot fudge and banana"
```
