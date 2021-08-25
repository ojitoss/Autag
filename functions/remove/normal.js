const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    normalRemove: function() {
        inquirer.prompt([{
            name: "name",
            message: "Write file remove"
        }]).then(anweser => {
            fs.unlinkSync(`./${anweser.name}`, error => {
                if (error) console.log(error);
            });
        });
    }
}