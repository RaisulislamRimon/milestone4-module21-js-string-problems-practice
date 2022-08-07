// uppercase => lowercase => uppercase
const str = "Hello World";
console.log(str.toLowerCase());

const str2 = "Hello World";
console.log(str2.toUpperCase());

const userName = "blackPink";
const userInput = "blackPinK";

if (userName === userInput) {
  console.log("equal");
} else {
  console.log("not equal");
}

const userName1 = "blackPink";
const userInput1 = "blackPinK";

if (userName1.toLowerCase() === userInput1.toLowerCase()) {
  console.log("equal");
} else {
  console.log("not equal");
}
