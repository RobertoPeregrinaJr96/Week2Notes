/*
---------------> node Basic-rundown/callBacks.js <--------------
*/

/*
Callbacks are just invoking a function within another function
JavaScript is a single thread language therefore it can only run one thing at a time from top to bottom: left to right
*/


// our parameters for this function are a number and a callback function
const addNum = (num, cb) => {
    // we will return the invoked the callback function with the num argument
    // the callback function will just run the function
    return cb(num)
}
// this is the callback function that we will be using that will take a number as a parameter
const addTen = (num) => {
    //  we will take the argument and add ten
    return num += 10
}

console.log(addNum(0, addTen)) // 10

// we have the main functin with a callback parameter
let foobar = function (callback) {
    // we will print foo to the terminal
    console.log("foo");
    // we then invoke the callback that will print hello to the termial
    callback();
    // finaly we print bar to the terminal
    console.log("bar");
};
// this is the function that will be called
let sayHello = function () {
    console.log("hello");
};

foobar(sayHello); // prints
  // foo
  // hello
  // bar
