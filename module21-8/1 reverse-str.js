// reverse a string using function

function reverseString(str) {
  console.log(str);
  // for (let i = 0; i < str.length; i++) {
  // for (let i = str.length; i >= 0; i--) { // wrong-it will give undefined
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i);
    const index = i;
    console.log(str[i]);
  }
}

const myStr = "I am a good boy";
const reversed = reverseString(myStr);
