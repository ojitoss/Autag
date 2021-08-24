const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    normalRename: function() {
        inquirer.prompt([{
            name: "file",
            message: "Write file to rename"
        },{
            name: "name",
            message: "Write new file name"
        }]).then(anweser => {
            fs.rename(`./${anweser.file}`, `./${anweser.name}`, error => {
                if (error) console.log(error);
            });
        });
    }
}