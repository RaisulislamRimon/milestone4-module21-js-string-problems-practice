// reverse a string using function

function reverseString(str) {
  console.log(str);
  // for (let i = 0; i < str.length; i++) { // forward loop
  // for (let i = str.length; i >= 0; i--) { // wrong-it will give undefined
  // reverse loop/backward loop
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(i);
    const index = i;
    console.log(str[i]);
  }
}

const myStr = "I am a good boy";
const reversed = reverseString(myStr);

// reverse a string using function

function reverseString1(str1) {
  console.log(str1);
  let reversed = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    const index = i;
    reversed = reversed + str1[i];
  }
  return reversed;
}

const myStr1 = "I am a good boy";
const reversed1 = reverseString1(myStr1);
console.log("reversed output :  ", reversed1);

// string words anti-reverse
console.log("string words anti-reverse program : ");

function reverseWords(strWords) {
  const words = strWords.split(" ");
  // console.log(words);
  for (let i = 0; i < words.length; i++) {
    console.log(words[i]);
  }
}
const str3 = "i am rimon";
reverseWords(str3);

// string words reverse
console.log("string words reverse program : ");

function reverseWords1(strWords1) {
  const words1 = strWords1.split(" ");
  // for (let i = 0; i < words1.length; i++) {
  for (let i = words1.length - 1; i >= 0; i--) {
    console.log(words1[i]);
    console.log(typeof words1[i]);
  }
}
const str4 = "i am rimon";
reverseWords1(str4);

// string words reverse and put it into a new array
console.log("string words reverse program : ");

function reverseWords2(strWords2) {
  const words2 = strWords2.split(" ");
  const result = [];
  for (let i = words2.length - 1; i >= 0; i--) {
    console.log(words2[i]);
    console.log(typeof words2[i]);
    result.push(words2[i]);
    console.log(result);
    console.log(typeof result);
  }
  console.log(result);
  console.log(typeof result);

  // join operator
  console.log(result.join(''))
  console.log(result.join(' '))
}
const str5 = "i am rimon";
reverseWords2(str5);
