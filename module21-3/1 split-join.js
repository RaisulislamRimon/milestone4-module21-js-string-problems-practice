// split

let lyrics =
  "tomi bondhu kala pakhi, ami jeno ki!!!bosonto kaleo tomay bolte parini....";
console.log(lyrics);

let parts = lyrics.split(" "); // removing white spaces
console.log(parts); // result => give an array

let lyrics1 =
  "tomi bondhu kala pakhi, ami jeno ki!!!bosonto kaleo tomay bolte parini....";
console.log(lyrics1);

let sentence = lyrics1.split("."); // removing full-stop, make sentences in an array
console.log(sentence); // result => give an array

let chars = lyrics1.split("");
console.log(chars);

// slice
let partial = lyrics1.slice(2, 5);
console.log(partial);

let partial1 = lyrics1.slice(5, 8);
console.log(partial1);

let lyrics2 =
  "tomi bondhu kala pakhi, ami jeno ki!!!bosonto kaleo tomay bolte parini....";
let partial2 = lyrics2.substring(5, 8);
console.log(partial2);
