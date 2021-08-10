const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    npmIgnore: function() {
        inquirer.prompt([{
            name: "npmdata",
            message: "Write a files ignores of npm"
        }]).then(anweser => {
            fs.appendFile('.npmignore', `${anweser.npmdata}\n`, error => {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
};