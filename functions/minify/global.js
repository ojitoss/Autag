
const { normalMinify } = require('./normal.js');

let global_object = new Object();
class minifyManager {
    constructor() {}

    normal() {
        normalMinify();
    }
}

module.exports = minifyManager;