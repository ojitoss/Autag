const { fileRender } = require('./file.js');
const { textRender } = require('./text.js');

let global_object = new Object();
class renderManager {
    constructor() {}

    file() {
        fileRender();
    }

    text() {
        textRender();
    }
}

module.exports = renderManager;