const { fileTranslate } = require('./file.js');
const { textTranslate } = require('./text.js');

let global_object = new Object();
class translateManager {
    constructor() {}

    file() {
        fileTranslate();
    }
    
    text() {
        textTranslate();
    }
}

module.exports = translateManager;