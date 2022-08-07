let first = 5;
let second = 7;
console.log(first, second);

let first1 = 5;
let second1 = 7;
console.log(first1, second1);

first1 = second1;
second1 = first1;
console.log(first1, second1);

let first2 = 5;
let second2 = 7;
console.log(first2, second2);
let temp = first2;
first2 = second2;
second2 = temp;
console.log(first2, second2);

let first3 = 5;
let second3 = 7;
console.log(first3, second3);
[first3, second3] = [second3, first3];
console.log(first3, second3);
