var traceur = require("traceur");

traceur.require.makeDefault(function(filename) {
    // don't transpile our dependencies, just our app
    return filename.indexOf("node_modules") === -1;
});

["string-to-code-point-array"].map(function(file) {
    return "./" + file + ".es6";
}).forEach(require);
