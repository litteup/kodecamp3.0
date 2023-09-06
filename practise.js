const moment = require("moment");

console.log("Hello");
// console.log(moment(new Date()),"Do MMMM");
console.log(moment(new Date().toISOString()).format("Do MMMM"));