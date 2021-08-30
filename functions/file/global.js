const { mdFile } = require('./md.js');
const { createFile } = require('./create.js');

let global_object = new Object();
class fileManager {
    constructor() {}

    create() {
        createFile();
    }

    md() {
        mdFile();
    }
}

module.exports = fileManager;