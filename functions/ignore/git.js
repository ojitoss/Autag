const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    gitIgnore: function() {
        inquirer.prompt([{
            name: "gitdata",
            message: "Write a files ignores of git"
        }]).then(anweser => {
            fs.appendFile('.gitignore', `${anweser.gitdata}\n`, error => {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
};