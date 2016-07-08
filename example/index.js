"use strict";

const smartFlatColor = require("../lib");

console.log(smartFlatColor());
// => #ecf0f1

console.log(smartFlatColor(["orange", "red"]));
// => #e67e22

console.log(smartFlatColor("green"));
// => #7f8c8d

console.log(smartFlatColor("white,gray"));
// => #27ae60

let fn = smartFlatColor("white,gray", true);
console.log(fn());
// => #bdc3c7

console.log(fn());
// => #7f8c8d
