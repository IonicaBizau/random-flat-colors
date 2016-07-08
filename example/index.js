"use strict";

const randomFlatColors = require("../lib");

console.log(randomFlatColors());
// => #ecf0f1

console.log(randomFlatColors(["orange", "red"]));
// => #e67e22

console.log(randomFlatColors("green"));
// => #7f8c8d

console.log(randomFlatColors("white,gray"));
// => #27ae60

let fn = randomFlatColors("white,gray", true);
console.log(fn());
// => #bdc3c7

console.log(fn());
// => #7f8c8d
