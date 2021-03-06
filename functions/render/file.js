const config = require('../../.autag/config.json');
const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    fileRender: function() {
        inquirer.prompt([{
            type: "list",
            name: "petition",
            message: "Select type petition",
            choices: [
                {
                    key: "get",
                    value: "get"
                },{
                    key: "post",
                    value: "post"
                },{
                    key: "put",
                    value: "put"
                },{
                    key: "delete",
                    value: "delete"
                },{
                    key: "patch",
                    value: "patch"
                },{
                    key: "head",
                    value: "head"
                },{
                    key: "options",
                    value: "options"
                }
            ]
        },{
            name: "rout",
            message: "Write rout"
        },{
            name: "file",
            message: "Write file render"
        }]).then(anweser => {
            if (anweser.petition === "get") {
                fs.appendFile(`./${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.get("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "post") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.post("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "put") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.put("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "delete") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.delete("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "patch") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.patch("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "head") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.head("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
            if (anweser.petition === "options") {
                fs.appendFile(`${config.paths.localhost.route}/${config.paths.localhost.name}.js`, 
`\n\napp.options("${anweser.rout}", (req, res)=> {
    res.render("${anweser.file}");
});`, error => {
    if (error) console.log(error);
});
            }
        });
    }
}