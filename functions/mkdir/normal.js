const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    normalMkdir: function() {
        inquirer.prompt([{
            name: "name",
            message: "Write a name of the folder"
        }]).then(anweser => {
            fs.mkdirSync(anweser.name, error => {
                if (error) {
                    console.log(error);
                } 
            });
        });
    }
}