const { mdFile } = require('./md.js');

let global_object = new Object();
class fileManager {
    constructor() {}

    md() {
        mdFile();
    }
}

module.exports = fileManager;