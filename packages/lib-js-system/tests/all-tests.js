
exports.testConsole = require("./console");

if (require.main == module)
    require("os").exit(require("test").run(exports));

