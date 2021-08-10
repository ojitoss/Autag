const fs = require('fs');
const inquirer = require('inquirer');

module.exports = {
    mdFile: function() {
        inquirer.prompt([{
            name: "file",
            message: "Write a file name"
        },{
            type: "list",
            name: "tag",
            message: "Select to type text",
            choices: [
                {
                    key: "title",
                    value: "title"
                },{
                    key: "paragraph",
                    value: "paragraph"
                },{
                    key: "block",
                    value: "block"
                },{
                    key: "board",
                    value: "board"
                },{
                    key: "list",
                    value: "list"
                },{
                    key: "link",
                    value: "link"
                },{
                    key: "image",
                    value: "image"
                },{
                    key: "quote",
                    value: "quote"
                }
            ]
        }]).then(anweser => {
            fs.appendFile(`${anweser.file}.md`, '', error => {
                if (error) {
                    console.log(error);
                }
            });
            if (anweser.tag === "title") {
                inquirer.prompt([{
                    type: "list",
                    name: "titles",
                    message: "Select a title type",
                    choices: [
                        {
                            key: "title1",
                            value: "title 1"
                        },{
                            key: "title2",
                            value: "title 2"
                        },{
                            key: "title3",
                            value: "title 3"
                        },{
                            key: "title4",
                            value: "title 4"
                        },{
                            key: "title5",
                            value: "title 5"
                        },{
                            key: "title6",
                            value: "title 6"
                        }
                    ]
                },{
                    name: "titledata",
                    message: "Write a title"
                }]).then(anweser2 => {
                    if (anweser2.titles === "title 1") {
                        fs.appendFile(`${anweser.file}.md`, `# ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.titles === "title 2") {
                        fs.appendFile(`${anweser.file}.md`, `## ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.titles === "title 3") {
                        fs.appendFile(`${anweser.file}.md`, `### ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.titles === "title 4") {
                        fs.appendFile(`${anweser.file}.md`, `#### ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.titles === "title 5") {
                        fs.appendFile(`${anweser.file}.md`, `##### ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.titles === "title 6") {
                        fs.appendFile(`${anweser.file}.md`, `###### ${anweser2.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
            if (anweser.tag === "paragraph") {
                inquirer.prompt([{
                    name: "paragraphname",
                    message: "Write a paragraph"
                }]).then(anweser2 => {
                    fs.appendFile(`${anweser.file}.md`, `${anweser2.paragraphname}\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anweser.tag === "block") {
                inquirer.prompt([{
                    type: "list",
                    name: "typeblock",
                    message: "Select a type block",
                    choices: [
                        {
                            key: "javascript",
                            value: "JavaScript"
                        },{
                            key: "python",
                            value: "Python"
                        }
                    ]
                },{
                    name: "blockdata",
                    message: "Write a block data"
                }]).then(anweser2 => {
                    if (anweser2.typeblock === "JavaScript") {
                      fs.appendFile(`${anweser.file}.md`, '```javascript\n' + anweser2.blockdata + "\n```\n", error => {
                          if (error) {
                              console.log(error);
                          }
                      });
                    }
                    if (anweser2.typeblock === "Python") {
                        fs.appendFile(`${anweser.file}.md`, '```python\n' + anweser2.blockdata + "\n```\n", error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                      }
                });
            }
            if (anweser.tag === "board") {
                inquirer.prompt([{
                    name: "columndata",
                    message: "Write a column"
                },{
                    name: "rowdata",
                    message: "Write a row"
                }]).then(anweser2 => {
                    fs.appendFile(`${anweser.file}.md`, 
`| ${anweser2.columndata} |
|-----------|
| ${anweser2.rowdata}    |\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anweser.tag === "list") {
                inquirer.prompt([{
                    type: "list",
                    name: "listtype",
                    message: "Select a type of list",
                    choices: [
                        {
                            key: "disorderly",
                            value: "disorderly"
                        },{
                            key: "ordinate",
                            value: "ordinate"
                        }
                    ]
                },{
                    name: "listdata",
                    message: "Write a data list"
                }]).then(anweser2 => {
                    if (anweser2.listtype === "disorderly") {
                        fs.appendFile(`${anweser.file}.md`, `* ${anweser2.listdata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anweser2.listtype === "ordinate") {
                        fs.appendFile(`${anweser.file}.md`, `1. ${anweser2.listdata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
            if (anweser.tag === "link") {
                inquirer.prompt([{
                    name: "linkname",
                    message: "Write a link name"
                },{
                    name: "linkdata",
                    message: "Write a link"
                }]).then(anweser2 => {
                    fs.appendFile(`${anweser.file}.md`, `[${anweser2.linkname}](${anweser2.linkdata})\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anweser.tag === "image") {
                inquirer.prompt([{
                    name: "imagename",
                    message: "Write a image name"
                },{
                    name: "imagelink",
                    message: "Write a link to image"
                }]).then(anweser2 => {
                    fs.appendFile(`${anweser.file}.md`, `![${anweser2.imagename}](${anweser2.imagelink}\n)`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anweser.tag === "quote") {
                inquirer.prompt([{
                    name: "quotedata",
                    message: "Write a text to quote"
                }]).then(anweser2 => {
                    fs.appendFile(`${anweser.file}.md`, `> ${anweser2.quotedata}\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
        });
    }
}