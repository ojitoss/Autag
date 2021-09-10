module.exports = {
    initManager: require('./functions/init/global.js'),
    fileManager: require('./functions/file/global.js'),
    ignoreManager: require('./functions/ignore/global.js'),
    licenseManager: require('./functions/license/global.js'),
    mkdirManager: require('./functions/mkdir/global.js'),
    translateManager: require('./functions/translate/global.js'),
    renameManager: require('./functions/rename/global.js'),
    removeManager: require('./functions/remove/global.js'),
    readManger: require('./functions/read/global.js'),
    localManager: require('./functions/local/global.js'),
    renderManager: require('./functions/render/global.js'),
    copyManager: require('./functions/copy/global.js'),
    minifyManager: require('./functions/minify/global.js')
}