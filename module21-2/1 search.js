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

console.log(lyrics1.indexOf("tomi"));
console.log(lyrics1.indexOf("sada"));
console.log(lyrics1.indexOf("kala"));
console.log(lyrics1.indexOf("pakhi"));
console.log(lyrics1.indexOf("ami"));

if (lyrics1.indexOf("kala") === -1) {
  console.log("can not find");
} else {
  console.log("find");
}

// starts with
// lyrics1.startsWith('tomi');
console.log(lyrics1.startsWith("tomi"));
console.log(lyrics1.startsWith("tmi"));

// ends with
let myBio = "Rimon.pdf";
let myPic = "other.png";
// myBio.endsWith(myPic);
console.log(myBio.endsWith(myPic));

// ends with
let myBio1 = "Rimon.pdf";
let myPic1 = "Rimon.pdf";
// myBio1.endsWith(myPic1);
console.log(myBio1.endsWith(myPic1));
