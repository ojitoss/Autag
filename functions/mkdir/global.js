const { normalMkdir } = require('./normal.js');

let global_object = new Object();
class mkdirManager {
    constructor() {}

    normal() {
        normalMkdir();
    }
}

module.exports = mkdirManager;