#!/usr/bin/env node

const fs = require('fs');
const { initNormal } = require('./functions/init/normal.js');
if (!fs.existsSync('.autag')) initNormal();
const autag = require('./export.js');
const file = new autag.fileManager();
const ignore = new autag.ignoreManager();
const license = new autag.licenseManager();
const mkdir = new autag.mkdirManager();
const translate = new autag.translateManager();
const rename = new autag.renameManager();
const remove = new autag.removeManager();
const read = new autag.readManger();
const local = new autag.localManager();
const render = new autag.renderManager();
const copy = new autag.copyManager();
const minify = new autag.minifyManager();
const search = new autag.searchManager();
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
        },{
            key: "local",
            value: "local"
        },{
            key: "render",
            value: "render"
        },{
            key: "copy",
            value: "copy"
        },{
            key: "minify",
            value: "minify"
        },{
            key: "search",
            value: "search"
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
                    key: "crate",
                    value: "create"
                },
                {
                    key: "md",
                    value: "md"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.format === "md") {
                file.md();
            }
            if (anweser2.format === "create") {
                file.create();
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
        mkdir.normal();
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
        translate.text();
    }
    if (anweser.options === "rename") {
        rename.normal();
    }
    if (anweser.options === "remove") {
        remove.normal();
    }
    if (anweser.options === "read") {
        read.normal();
    }
    if (anweser.options === "local") {
        local.normal();
    }
    if (anweser.options === "render") {
        inquirer.prompt([{
            type: "list",
            name: "type",
            message: "Select type render",
            choices: [
                {
                    key: "file",
                    value: "file"
                },{
                    key: "text",
                    value: "text"
                }
            ]
        }]).then(anweser2 => {
            if (anweser2.type === "file") {
                render.file();
            }
            if (anweser2.type === "text") {
                render.text();
            }
        });
    }
    if (anweser.options === "copy") copy.normal();
    if (anweser.options === "minify") minify.normal();
    if (anweser.options === "search") search.normal();
});

console.log('\n\n\n\n\t\t\t\t\t\t  //= AUTAG =\\');
console.log('\n\t\t\t\t\t   //= process automation =\\');
console.log('\t\t\t\t\t  //= In charge of: ojitos =\\');
console.log('\t\t\t\t//= npm page: https://www.npmjs.com/package/autag =\\');
console.log('\t\t\t\t\t//= github: https://github.com/ojitoss =\\');
console.log('\t\t\t\t\t      //= Version:  3.4.4 =\\');
console.log('\t\t\t\t\t         //= MIT License =\\');

if (fs.existsSync('.autag')) return;