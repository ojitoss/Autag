const { mitLicense } = require('./mit.js');

let global_object = new Object();
class licenseManager {
    constructor() {}

    mit() {
        mitLicense();
    }
}

module.exports = licenseManager;