const { normalRead } = require('./normal.js');

let global_object = new Object();
class readManager {
    constructor() {}

    normal() {
        normalRead();
    }
}

module.exports = readManager;