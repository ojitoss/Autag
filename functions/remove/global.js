const { normalRemove } = require('./normal.js');

let global_object = new Object();
class removeManager {
    constructor() {}

    normal() {
        normalRemove();
    }
}

module.exports = removeManager;