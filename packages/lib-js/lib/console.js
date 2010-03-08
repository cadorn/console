
function dump(obj) { print(require('test/jsdump').jsDump.parse(obj)) };


var Console = exports.Console = function() {
    if (!(this instanceof exports.Console))
        return new exports.Console();
}

Console.prototype.log = function() {
    

dump(arguments);

    
}
