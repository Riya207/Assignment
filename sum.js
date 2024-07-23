//  Find the sum of first 4 natural numbers using callback functions and promises (also with async/await)

//   USING CALLBACK FUNCTION

function sum(n, callback) {
  let sum = 0;
  for (let i = 1; i <= n; i++) sum = sum + i;
  callback(sum);
}
function displaySum(total) {
  console.log("The sum is ", total);
}
sum(4, displaySum);


// using promises

function sum(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

function sumOfFirstFour() {
  return sum(1, 2)
    .then((result) => sum(result, 3))
    .then((result) => sum(result, 4));
}

sumOfFirstFour().then((result) => {
  console.log("The sum of the first four natural numbers is:", result);
});


// await

function add(a, b) {
          return new Promise((resolve) => {
              resolve(a + b);
          });
      }
      
      async function sumFirstFour() {
          let sum = 0;
          sum = await add(sum, 1);
          sum = await add(sum, 2);
          sum = await add(sum, 3);
          sum = await add(sum, 4);
          return sum;
      }
      
      sumFirstFour().then(result => {
          console.log(`The sum of the first four natural numbers is: ${result}`);
      });
