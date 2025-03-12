// shop discount
// let amount = Number(prompt("What is the final amount ?"));

// if (isNaN(amount)) {
//   console.log("Wrong amount");
// } else if (amount > 0 && amount <= 5000) {
//   console.log(amount);
// } else if (amount > 5001 && amount <= 7000) {
//   console.log(amount - Math.floor((5 * amount) / 100));
// } else if (amount > 7001 && amount <= 9000) {
//   console.log(amount - Math.floor((10 * amount) / 100));
// } else if (amount > 9000) {
//   console.log(amount - Math.floor((20 * amount) / 100));
// } else {
//   console.log("Your pay able amount is not correct");
// }

// other method to solve this problem

let amount = Number(prompt("What is the final amount ?"));
dis = 0;

if (isNaN(amount)) {
  console.log("Wrong amount");
} else if (amount > 0 && amount <= 5000) {
  dis = 0;
} else if (amount > 5001 && amount <= 7000) {
  dis = 5;
} else if (amount > 7001 && amount <= 9000) {
  dis = 10;
} else if (amount > 9000) {
  dis = 20;
} else {
  console.log("Your pay able amount is not correct");
}

console.log(amount - Math.floor((dis * amount) / 100));
