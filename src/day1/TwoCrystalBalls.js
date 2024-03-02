"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function two_crystal_balls(breaks) {
    var jumpAmount = Math.floor(Math.sqrt(breaks.length));
    var i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        // that means loop stops when finds truthy value
        // we knowing last jump range because od i += jumpAmount
        if (breaks[i]) {
            break;
        }
    }
    // here we jumping back one time to find exact first truthy element
    i -= jumpAmount;
    // Checking every next value by increasing j as iteration cycle
    // and index of real value -> i also increased with every step
    for (var j = 0; j < jumpAmount && i < breaks.length; ++j, ++i) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
exports.default = two_crystal_balls;
