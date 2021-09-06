const { initNormal } = require('./normal.js');

let global_object = new Object();
class initManager {
    constructor() {}

    normal() {
        initNormal();
    }
}

module.exports = initManager;