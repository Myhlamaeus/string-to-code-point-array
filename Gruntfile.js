/* jshint node:true */

"use strict";

module.exports = function (grunt) {
    // Show elapsed time at the end
    require("time-grunt")(grunt);
    // Load all grunt tasks
    require("load-grunt-tasks")(grunt);

    // Project configuration.
    grunt.initConfig({
        config: {
            main: "string-to-code-point-array",
            global: "stringToCodePointArray"
        },
        mochaTest: {
            test: {
                options: {
                    reporter: "spec",
                    captureFile: "errors.txt"
                },
                src: ["test/test.js"]
            }
        },
        jshint: {
            options: {
                jshintrc: ".jshintrc",
                reporter: require("jshint-stylish")
            },
            gruntfile: {
                src: "Gruntfile.js"
            },
            lib: {
                src: ["<%= config.main %>"]
            },
            test: {
                options: {
                    jshintrc: "test/.jshintrc"
                },
                src: ["test/**/*.js"]
            }
        },
        watch: {
            gruntfile: {
                files: "<%= jshint.gruntfile.src %>",
                tasks: ["jshint:gruntfile"]
            },
            lib: {
                files: ["<%= jshint.lib.src %>", "<%= jshint.test.src %>"],
                tasks: ["jshint:lib", "mochaTest"]
            }
        }
    });

    grunt.registerTask("test", ["jshint", "mochaTest"]);
};
