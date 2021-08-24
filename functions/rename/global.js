const { normalRename } = require('./normal.js');

let global_object = new Object();
class renameManager {
    constructor() {}

    normal() {
        normalRename();
    }
}

module.exports = renameManager;