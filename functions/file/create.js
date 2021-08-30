const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    createFile: function() {
        inquirer.prompt([{
            name: "name",
            message: "Write file name file"
        }]).then(anweser => {
            fs.appendFile(`${anweser.name}`, ``, error => {
                if (error) console.log(error);
            });
        });
    }
};