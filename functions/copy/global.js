const { normalCopy } = require('./normal.js');

let global_object = new Object();
class copyManager {
    constructor() {}

    normal() {
        normalCopy();
    }
}

module.exports = copyManager;