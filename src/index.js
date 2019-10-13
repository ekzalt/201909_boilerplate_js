/*
1) JSDoc for correct IDE IntelliSense (declaration only)
2) Guard if checks
3) Eslint
4) Custom errors
5) Tests + coverage
6) NPM scripts
*/

const { some, getUserName } = require("./utils");

const arr = ["one", "two", "three"];
const str = "two";
const user = { name: "Alex" };

console.log(some(arr, str));
console.log(getUserName(user));
