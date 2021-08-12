const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    eslintIgnore: function() {
        inquirer.prompt([{
            name: "eslintdata",
            message: "Write a files ignores of eslint"
        }]).then(anweser => {
            fs.appendFile('.eslintignore', `${anweser.eslintdata}\n`, error => {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
};