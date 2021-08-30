const { normalLocal } = require('./normal.js');

let global_object = new Object();
class localManager {
    constructor() {}

    normal() {
        normalLocal();
    }
}

module.exports = localManager;