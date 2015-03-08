"use strict";

const traceur = require("traceur");

traceur.require.makeDefault(function(filename) {
    // don't transpile our dependencies, just our app
    return filename.indexOf("node_modules") === -1;
});

["string-to-code-point-array"].map(function(file) {
    return "./" + file + ".js";
}).forEach(require);
