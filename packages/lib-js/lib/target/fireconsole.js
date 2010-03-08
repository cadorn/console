
var UTIL = require("util");
var DISPATCHER = require("dispatcher", "fireconsole");

var Target = exports.Target = function() {
    if (!(this instanceof exports.Target))
        return new exports.Target();
    
    this.dispatcher = DISPATCHER.Dispatcher();
}

Target.prototype.send = function(data, meta) {

    return this.dispatcher.send(data, mapMeta(meta));

}



function mapMeta(metaIn) {
    var metaOut = {};
    
    if(UTIL.has(metaIn, "label")) metaOut["fc.msg.label"] = metaIn["label"];
    if(UTIL.has(metaIn, "file")) metaOut["fc.msg.file"] = metaIn["file"];
    if(UTIL.has(metaIn, "line")) metaOut["fc.msg.line"] = metaIn["line"];
    
    return metaOut;
}
