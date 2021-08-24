const { textTranslate } = require('./text.js');

let global_object = new Object();
class translateManager {
    constructor() {}
    
    text() {
        textTranslate();
    }
}

module.exports = translateManager;