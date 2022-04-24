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
  })
  .then((resolvedValueArray) => {
    // Write the correct return statement here:
  })
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });


  //Tasks
  // -----------------------------------

