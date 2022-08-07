let lyrics =
  "tomi bondhu kala pakhi, ami jeno ki!!!bosonto kaleo tomay bolte parini....";
console.log(lyrics);

const searchString = "pakhi";
console.log(lyrics.includes(searchString));

const searchString2 = "Pakhi";
console.log(lyrics.includes(searchString2));

let searchString3 = "Pakhi";
searchString3 = searchString3.toLowerCase();
console.log(lyrics.includes(searchString3));

let lyrics1 =
  "ToMi bondhu kala pakhi, ami jeno ki!!!bosonto kaleo tomay bolte parini....";
let searchString4 = "tOmi";
lyrics1 = lyrics1.toLowerCase();
searchString4 = searchString4.toLowerCase();
console.log(lyrics1.includes(searchString4));

console.log(lyrics1.indexOf("kala"));
console.log(lyrics1.indexOf("kala kala"));
