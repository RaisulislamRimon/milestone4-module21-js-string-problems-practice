let result = Math.pow(2, 2);
console.log(result);

let result1 = Math.pow(3, 4);
console.log(result1);

let num1 = 25;
let num2 = 45;
let gap = num1 - num2;
console.log(gap); // gap is negative
if (gap < 5) {
  console.log("friends");
} else {
  console.log("single");
}

let number1 = 25;
let number2 = 45;
let gapp = number1 - number2;
console.log(gapp);
let gappMathAbs = Math.abs(gapp);
console.log(gappMathAbs);
if (gapp < 5) {
  console.log("friends");
} else {
  console.log("single");
}

let a = 2.4598;
console.log(Math.round(a));

let b = 2.4598;
console.log(Math.floor(b));

let c = 2.4598;
console.log(Math.ceil(c));

let result2 = Math.random();
console.log(result2);

let result3 = Math.random() * 100;
console.log(result3);

let result4 = Math.round(Math.random() * 100);
console.log(result4);

for (let i = 0; i < 20; i++) {
  let random = Math.round(Math.random() * 6);
  console.log(random);
}
