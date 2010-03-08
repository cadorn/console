
function dump(obj) { print(require('test/jsdump').jsDump.parse(obj)) };


var ASSERT = require("assert");

var UTIL = require("util");
var CONSOLE = require("console");


exports.testLog = function() {
    
    CONSOLE.log("Hello", "World");
        
}


if (require.main == module.id)
    require("os").exit(require("test").run(exports));
