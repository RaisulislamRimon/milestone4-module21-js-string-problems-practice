const myAddress = "123 Main St., Suite 330, Boston, MA 02111-1307";
console.log(myAddress);
console.log(myAddress.length);
console.log(myAddress[0]);
console.log(myAddress[1]);
console.log(myAddress[2]);
console.log(myAddress[3]);
console.log(myAddress[4]);
console.log(myAddress[5]);

const personName = "John Doe";
console.log(personName);
console.log(personName.length);
console.log(personName[0]);
console.log(personName[1]);
console.log(personName[2]);
console.log(personName[3]);
console.log(personName[4]);
console.log(personName[5]);

const nameArray = ["John", "Doe", "Smith", "Hernandez", "Williams", "Johnson"];
console.log(nameArray);
console.log(nameArray[0]);
console.log(nameArray[1]);
console.log(nameArray[2]);
console.log(nameArray[3]);

const nameArray2 = ["John", "Doe", "Smith", "Hernandez", "Williams", "Johnson"];
console.log(nameArray2[0]);
nameArray2[0] = "Rimon";
console.log(nameArray2[0]);
console.log(nameArray2);

// string is character immutable
const nameArray3 = "John  Smith   Smith Doe Smith";
console.log(nameArray3[0]);
console.log(nameArray3[1]);
console.log(nameArray3[2]);
console.log(nameArray3[3]);
console.log(nameArray3[4]);
console.log(nameArray3[5]);
console.log(nameArray3[6]);
nameArray3[0] = "r";
console.log(nameArray3[0]);

const firstName = "Hannan";
const lastName = "Poribohon";
console.log(firstName);
console.log(lastName);
console.log(firstName, lastName);
console.log(typeof firstName, firstName, typeof lastName, lastName);
const fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

let first = "Ena";
first = first + "Poribohon";
console.log(first);
