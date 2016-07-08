"use strict";

const flatColors = require("flat-colors-groupped")
    , uniqueRandomArray = require("unique-random-array")
    ;

let _cache = {};

/**
 * smartFlatColor
 * Get a random flat color from a group of colors.
 *
 * @name smartFlatColor
 * @function
 * @param {Number} a Param descrpition.
 * @param {Number} b Param descrpition.
 * @return {Number} Return description.
 */
module.exports = function smartFlatColor (groups) {
    if (!groups || !groups.length) {
        groups = Object.keys(flatColors);
    }

    if (typeof groups === "string") {
        groups = groups.split(",");
    }

    let hash = groups.join(",");

    if (_cache[hash]) {
        return _cache[hash]();
    }

    let arr = [];

    groups.forEach(c => {
        let colors = flatColors[c];
        if (!colors) { throw new Error("Group not found: " + c); }
        arr = arr.concat(colors);
    });

    return (_cache[hash] = uniqueRandomArray(arr))();
};
