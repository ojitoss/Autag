#!/usr/bin/env node

const autag = require('./export.js');
const file = new autag.fileManager();
const ignore = new autag.ignoreManager();
const license = new autag.licenseManager();
const mkdir = new autag.mkdirManager();
const fs = require("fs");
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
});