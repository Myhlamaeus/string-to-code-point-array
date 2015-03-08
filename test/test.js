"use strict";

require("babel/register");
["string-to-code-point-array"].map(function(file) {
    return "./" + file;
}).forEach(require);
