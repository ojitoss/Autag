const { gitIgnore } = require('./git.js');
const { npmIgnore } = require('./npm.js');
const { eslintIgnore } = require('./eslint.js');

let global_object = new Object();
class ignoreManager {
    constructor() {}

    git() {
        gitIgnore();
    }
    
    npm() {
        npmIgnore();
    }

    eslint() {
        eslintIgnore();
    }
}

module.exports = ignoreManager;