const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');

module.exports = {
    normalSearch: function() {
        inquirer.prompt([{
            name: "file",
            message: "Write file  a search"
        },{
            name: "text",
            message: "Write text a search"
        }]).then(anweser => {
            fs.readFile(`${anweser.file}`, 'utf-8', (error, data) => {
                if (error) console.log(error);
                if (data.includes(anweser.text)) {
                    console.log(true);
                } else {
                    console.log(false);
                }
            });
        });
    }
}