const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    normalCopy: function() {
        inquirer.prompt([{
            name: "copy",
            message: "Write file to copy content"
        },{
            name: "paste",
            message: "Write file to paste content"
        }]).then(anweser => {
            fs.readFile(`./${anweser.copy}`, 'utf-8', (error, data)=> {
                if (error) console.log(error);
                fs.writeFile(`./${anweser.paste}`, data, error => {
                    if (error) console.log(error);
                });
            });
        });
    }
}