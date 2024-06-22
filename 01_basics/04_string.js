const name = "pushpraj"
repoCount = 50

// console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('pushpraj-jaiswal');

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(0,3);
console.log(anotherString);

const newString1 = "    pushpraj    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://pushpraj.com/pushpraj%20jaiswal";

url.replace('%20','_');
console.log(url);