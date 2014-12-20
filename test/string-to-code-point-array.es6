import stringToCodePointArray from "../string-to-code-point-array.es6";

const assert = require("assert"),
    codePoints = [
        0x000000,
        0x00ffff,
        0x010000,
        0x10FFFF
    ],
    codePointArrays = {},
    tests = {};

for(let codePoint of codePoints) {
    codePointArrays[`3 x ${codePoint.toString(16)}`] = (new Array(3)).fill(codePoint);
}

for(let i = 0; i < 2; ++i) {
    let codePointPair = [codePoints[1], codePoints[2]];
    if(i) {
        codePointPair.reverse();
    }
    codePointPair[2] = codePointPair[0];
    codePointArrays[`${codePointPair[0].toString(16)}, ${codePointPair[1].toString(16)}, ${codePointPair[2].toString(16)}`] = codePointPair;
}

for(let key in codePointArrays) {
    let arr = codePointArrays[key];

    tests[key] = [arr.map((code) => String.fromCodePoint(code)).join(""), arr];
}

describe("stringToCodePointArray()", function() {
    for(let name in tests) {
        let test = tests[name];

        it(`code points: ${name}`, function() {
            assert.deepEqual(stringToCodePointArray(test[0]), test[1]);
        });
    }
});
