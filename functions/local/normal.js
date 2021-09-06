const config = require('../../.autag/config.json');
const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    normalLocal: function() {
        inquirer.prompt([{
            name: "folder",
            message: "Write folder to views"
        },{
            name: "endgine",
            message: "Write views endgine"
        },{
            name: "port",
            message: "Write port to localhost"
        }]).then(anweser => {
            fs.writeFile(`./${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "${anweser.folder}"));
app.set("view endgine", "${anweser.endgine}");

app.listen(${anweser.port}, ()=> {
    console.log("Server on port", ${anweser.port});
});`, error => {
    if (error) console.log(error);
});
        });
    }
}