
var CONSOLE = require("console", "github.com/cadorn/console/raw/master/lib-js");

var console = CONSOLE.Console();


exports.log = function() {
    return console.log.call(console, arguments);    
}

