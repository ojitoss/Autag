const fs = require('fs');
const inquirer = require('inquirer');
const translate = require('@k3rn31p4nic/google-translate-api');

module.exports = {
    fileTranslate: function() {
        inquirer.prompt([{
            type: "list",
            name: "lang",
            message: "Select the language you want to translate",
            choices: [
                {
                    key: "en",
                    value: "en"
                },{
                    key: "es",
                    value: "es"
                }
            ]
        },{
            name: "file",
            message: "Write the file to translate"
        }]).then(anweser => {
            if (anweser.lang === "en") {
                fs.readFile(`./${anweser.file}`, 'utf-8', (error, data)=> {
                    if (error) {
                        console.log(error);
                    }
                    translate(data, {
                        to: anweser.lang
                    }).then(res => {
                        console.log(`Translate to english in ${anweser.file}:\n${res.text}`);
                    });
                });
            }
            if (anweser.lang === "es") {
                fs.readFile(`./${anweser.file}`, 'utf-8', (error, data)=> {
                    if (error) {
                        console.log(error);
                    }
                    translate(data, {
                        to: anweser.lang
                    }).then(res => {
                        console.log(`Translate to spanish in ${anweser.file}:\n${res.text}`);
                    });
                });
            }
        });
    }
} 