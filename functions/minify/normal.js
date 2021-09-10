const inquirer = require('inquirer');
const minify = require('minify');

module.exports = {
    normalMinify: function() {
        inquirer.prompt([{
            type: "list",
            name: "format",
            message: "Select format to minify",
            choices: [
                {
                    key: "js",
                    value: "js"
                },{
                    key: "css",
                    value: "css"
                },{
                    key: "html",
                    value: "html"
                }
            ]
        },{
            name: "file",
            message: "Write file to minify"
        }]).then(anweser => {
            if (anweser.format === "js") {
                minify(`${anweser.file}.js`).then(console.log).catch(console.error);
            }
            if (anweser.format === "css") {
                minify(`${anweser.file}.css`).then(console.log).catch(console.error);
            }
            if (anweser.format === "html") {
                minify(`${anweser.file}.html`).then(console.log).catch(console.error);
            }
        });
    }
}