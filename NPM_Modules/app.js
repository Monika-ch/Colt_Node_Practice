const math = require("./math");
// console.log(math);
// console.log(math.PI);
// console.log(math.square(9));

// // OR-----

const { PI, square } = require("./math");
// console.log(PI);
// console.log(square(4));

const cats = require("./shelter");
console.log("REQUIRED AN ENTIRE DIRECTORY", cats);
