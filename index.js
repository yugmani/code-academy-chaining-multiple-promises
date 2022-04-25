// Import stylesheets
import './style.css';

// Chaining Multiple Promises
// *****************************************

//Here’s a simple promise chain in code:
/*
firstPromiseFunction()
.then((firstResolveVal)=>{
  return secondPromiseFunction(firstResolveVal);
})
.then((secondResolveVal)=>{
  console.log(secondResolveVal);
});
*/

//Code Starter
// ------------------------------------------------

const { checkInventory, processPayment, shipOrder } = require('./library.js');

const order = {
  items: [
    ['sunglasses', 1],
    ['bags', 2],
  ],
  giftcardBalance: 79.82,
};

checkInventory(order)
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return processPayment(resolvedValueArray);
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
    return shipOrder(resolvedValueArray)
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });


  //Tasks
  // -----------------------------------
/*
1.
Take a look at the provided code. We require in three functions: checkInventory(), processPayment(), shipOrder(). These functions each return a promise.

checkInventory() expects an order argument and returns a promise. If there are enough items in stock to fill the order, the promise will resolve to an array. The first element in the resolved value array will be the same order and the second element will be the total cost of the order as a number.

processPayment() expects an array argument with the order as the first element and the purchase total as the second. This function returns a promise. If there is a large enough balance on the giftcard associated with the order, it will resolve to an array. The first element in the resolved value array will be the same order and the second element will be a tracking number.

shipOrder() expects an array argument with the order as the first element and a tracking number as the second. It returns a promise which resolves to a string confirming the order has shipped.

If you’d like, look at the library.js file to see how these functions work. Press “Check Work” when you’re ready to move on to the next checkpoint.
*/

/*
2.
We set up a promise chain but it’s missing a couple important lines of code to make it function properly.

We invoked checkInventory() with order and chained a .then() function to it. This .then() has an anonymous function as its success handler, but it’s missing a return statement.

The success handler should return a processPayment() promise.
*/

/*
3.
We have a second .then() function on the chain. This .then() also has an anonymous function as its success handler and is missing a return statement.

The success handler should return a shipOrder() promise.
*/

/*
4.
Type node app.js in the terminal and hit enter.
*/

/*
Running the code

  $ node app.js
All of the items are in stock. The total cost of the order is 35.97.
Payment processed with giftcard. Generating shipping label.
The order has been shipped. The tracking number is: 55303.
*/