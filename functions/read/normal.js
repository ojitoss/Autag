const fs = require('fs');
const inquirer = require('inquirer');
const highlight = require('cli-highlight').highlight;

module.exports = {
    normalRead: function() {
        inquirer.prompt([{
            name: "file",
            message: "Write file read"
        }]).then(anweser => {
            fs.readFile(`./${anweser.file}`, 'utf-8' , (error, data) => {
                if (error) console.log(error);
                console.log(highlight(data));
            });
        });
    }
}