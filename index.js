#!/usr/bin/env node

const autag = require('./export.js');
const file = new autag.fileManager();
const ignore = new autag.ignoreManager();
const license = new autag.licenseManager();
const mkdir = new autag.mkdirManager();
const translate = new autag.translateManager();
const rename = new autag.renameManager();
const remove = new autag.removeManager();
const read = new autag.readManger();
const inquirer = require('inquirer');

inquirer.prompt([{
    type: "list",
    name: "options",
    message: "Select the option you want to execute",
    choices: [
        {
            key: "file",
            value: "file"
        },{
            key: "ignore",
            value: "ignore"
        },{
            key: "mkdir",
            value: "mkdir"
        },{
            key: "license",
            value: "license"
        },{
            key: "translate",
            value: "translate"
        },{
            key: "rename",
            value: "rename"
        },{
            key: "remove",
            value: "remove"
        },{
            key: "read",
            value: "read"
        }
    ]
}]).then(anweser => {
    if (anweser.options === "file") {
        inquirer.prompt([{
            type: "list",
            name: "format",
            message: "Select a format",
            choices: [
                {
                    key: "md",
                    value: "md"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.format === "md") {
                file.md();
            }
        });
    }
    if (anweser.options === "ignore") {
        inquirer.prompt([{
            type: "list",
            name: "format",
            message: "Select a file ignores tool",
            choices : [
                {
                    key: "npm",
                    value: "npm"
                },{
                    key: "git",
                    value: "git"
                },{
                    key: "eslint",
                    value: "eslint"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.format === "npm") {
                ignore.npm();
            }
            if (anweser2.format === "git") {
                ignore.git();
            }
            if (anweser2.format === "eslint") {
                ignore.eslint();
            }
        });
    }
    if (anweser.options === "mkdir") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select a type folder",
            choices: [
                {
                    key: "normal",
                    value: "normal"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "normal") {
                mkdir.normal();
            }
        });
    }
    if (anweser.options === "license") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select to license",
            choices: [
                {
                    key: "mit",
                    value: "mit"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "mit") {
                license.mit();
            }
        });
    }
    if (anweser.options === "translate") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select the type of translation you are going to execute",
            choices: [
                {
                    key: "text",
                    value: "text"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "text") {
                translate.text();
            }
        });
    }
    if (anweser.options === "rename") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select to type of rename",
            choices: [
                {
                    key: "normal",
                    value: "normal"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "normal") {
                rename.normal();
            }
        });
    }
    if (anweser.options === "remove") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select to remove",
            choices: [
                {
                    key: "normal",
                    value: "normal"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "normal") {
                remove.normal();
            }
        });
    }
    if (anweser.options === "read") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select type read",
            choices: [
                {
                    key: "normal",
                    value: "normal"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "normal") {
                read.normal();
            }
        });
    }
});