const { normalSearch } = require('./normal.js');

let global_object = new Object();
class searchManager {
    constructor() {}

    normal() {
        normalSearch();
    }
}

module.exports = searchManager;