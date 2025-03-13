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

// let amount = Number(prompt("What is the final amount ?"));
// dis = 0;

// if (isNaN(amount)) {
//   console.log("Wrong amount");
// } else if (amount > 0 && amount <= 5000) {
//   dis = 0;
// } else if (amount > 5001 && amount <= 7000) {
//   dis = 5;
// } else if (amount > 7001 && amount <= 9000) {
//   dis = 10;
// } else if (amount > 9000) {
//   dis = 20;
// } else {
//   console.log("Your pay able amount is not correct");
// }

// console.log(amount - Math.floor((dis * amount) / 100));

// Electricity bill
let unit = Number(prompt("Please Enter the total units of your bill"));
amount = 0;
if (unit > 400) {
  amount = (unit - 400) * 13;
  unit = 400;
}
if (unit > 200 && unit <= 400) {
  amount += (unit - 200) * 8;
  unit = 200;
}
if (unit > 100 && unit <= 200) {
  amount += (unit - 100) * 6;
  unit = 100;
}
amount += unit * 4;

console.log("Here is your actual amounnt after discount =>", amount);
