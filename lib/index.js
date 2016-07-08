"use strict";

const flatColors = require("flat-colors-groupped")
    , uniqueRandomArray = require("unique-random-array")
    ;

let _cache = {};

/**
 * randomFlatColor
 * Get a random flat color from a group of colors.
 *
 * @name randomFlatColor
 * @function
 * @param {Array} groups An array of flat color groups. The supported group names are:
 *
 *  - blue
 *  - teal
 *  - green
 *  - purple
 *  - dark
 *  - yellow
 *  - orange
 *  - red
 *  - white
 *  - gray
 *
 * @param {Boolean} fn If `true`, the random function will be returned (not the color string).
 * @return {String|String} That flat color as hex, or the function if `fn` is true.
 */
module.exports = function randomFlatColor (groups, fn) {
    if (!groups || !groups.length) {
        groups = Object.keys(flatColors);
    }

    if (typeof groups === "string") {
        groups = groups.split(",");
    }

    let hash = groups.join(",");

    if (_cache[hash]) {
        if (fn === true) {
            return _cache[hash];
        }
        return _cache[hash]();
    }

    let arr = [];

    groups.forEach(c => {
        let colors = flatColors[c];
        if (!colors) { throw new Error("Group not found: " + c); }
        arr = arr.concat(colors);
    });

    let _fn = _cache[hash] = uniqueRandomArray(arr);
    if (fn === true) {
        return _fn;
    }
    return _fn();
};
