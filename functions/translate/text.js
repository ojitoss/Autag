const fs = require('fs');
const inquirer = require('inquirer');
const translate = require('@k3rn31p4nic/google-translate-api');

module.exports = {
    textTranslate: function() {
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
            name: "data",
            message: "Write the text to translate"
        }]).then(anweser => {
            if (anweser.lang === "en") {
                translate(anweser.data, {
                    to: anweser.lang
                }).then(res => {
                    console.log(`Translate to english:\n${res.text}`);
                });
            }
            if (anweser.lang === "es") {
                translate(anweser.data, {
                    to: anweser.lang
                }).then(res => {
                    console.log(`Translate to spanish:\n${res.text}`);
                });
            }
        });
    }
} 