#!/usr/bin/env node

const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt([{
    type: "list",
    name: "format",
    message: "Select a format",
    choices: [
        {
            key: "md",
            value: "md"
        },{
            key: "npmignore",
            value: "npmignore"
        },{
            key: "gitignore",
            value: "gitignore"
        },{
            key: "license",
            value: "license"
        }
    ]
}]).then(anweser => {
    if (anweser.format === "md") {
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
        }]).then(anwese2 => {
            fs.appendFile(`${anwese2.file}.md`, '', error => {
                if (error) {
                    console.log(error);
                }
            });
            if (anwese2.tag === "title") {
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
                }]).then(anwese3 => {
                    if (anwese3.titles === "title 1") {
                        fs.appendFile(`${anwese2.file}.md`, `# ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.titles === "title 2") {
                        fs.appendFile(`${anwese2.file}.md`, `## ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.titles === "title 3") {
                        fs.appendFile(`${anwese2.file}.md`, `### ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.titles === "title 4") {
                        fs.appendFile(`${anwese2.file}.md`, `#### ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.titles === "title 5") {
                        fs.appendFile(`${anwese2.file}.md`, `##### ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.titles === "title 6") {
                        fs.appendFile(`${anwese2.file}.md`, `###### ${anwese3.titledata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
            if (anwese2.tag === "paragraph") {
                inquirer.prompt([{
                    name: "paragraphname",
                    message: "Write a paragraph"
                }]).then(anwese3 => {
                    fs.appendFile(`${anwese2.file}.md`, `${anwese3.paragraphname}\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anwese2.tag === "block") {
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
                }]).then(anwese3 => {
                    if (anwese3.typeblock === "JavaScript") {
                      fs.appendFile(`${anwese2.file}.md`, '```javascript\n' + anwese3.blockdata + "\n```\n", error => {
                          if (error) {
                              console.log(error);
                          }
                      });
                    }
                    if (anwese3.typeblock === "Python") {
                        fs.appendFile(`${anwese2.file}.md`, '```python\n' + anwese3.blockdata + "\n```\n", error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                      }
                });
            }
            if (anwese2.tag === "board") {
                inquirer.prompt([{
                    name: "columndata",
                    message: "Write a column"
                },{
                    name: "rowdata",
                    message: "Write a row"
                }]).then(anwese3 => {
                    fs.appendFile(`${anwese2.file}.md`, 
`| ${anwese3.columndata} |
|-----------|
| ${anwese3.rowdata}    |\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anwese2.tag === "list") {
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
                }]).then(anwese3 => {
                    if (anwese3.listtype === "disorderly") {
                        fs.appendFile(`${anwese2.file}.md`, `* ${anwese3.listdata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                    if (anwese3.listtype === "ordinate") {
                        fs.appendFile(`${anwese2.file}.md`, `1. ${anwese3.listdata}\n`, error => {
                            if (error) {
                                console.log(error);
                            }
                        });
                    }
                });
            }
            if (anwese2.tag === "link") {
                inquirer.prompt([{
                    name: "linkname",
                    message: "Write a link name"
                },{
                    name: "linkdata",
                    message: "Write a link"
                }]).then(anwese3 => {
                    fs.appendFile(`${anwese2.file}.md`, `[${anwese3.linkname}](${anwese3.linkdata})\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anwese2.tag === "image") {
                inquirer.prompt([{
                    name: "imagename",
                    message: "Write a image name"
                },{
                    name: "imagelink",
                    message: "Write a link to image"
                }]).then(anwese3 => {
                    fs.appendFile(`${anwese2.file}.md`, `![${anwese3.imagename}](${anwese3.imagelink}\n)`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
            if (anwese2.tag === "quote") {
                inquirer.prompt([{
                    name: "quotedata",
                    message: "Write a text to quote"
                }]).then(anwese3 => {
                    fs.appendFile(`${anwese2.file}.md`, `> ${anwese3.quotedata}\n`, error => {
                        if (error) {
                            console.log(error);
                        }
                    });
                });
            }
        });
    }
    if (anweser.format === "gitignore") {
        inquirer.prompt([{
            name: "gitdata",
            message: "Write a files ignores for git"
        }]).then(anwese2 => {
            fs.appendFile('.gitignore', `${anwese2.gitdata}\n`, error => {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
    if (anweser.format === "npmignore") {
        inquirer.prompt([{
            name: "npmdata",
            message: "Write a files ignores for npm"
        }]).then(anwese2 => {
            fs.appendFile('.npmignore', `${anwese2.npmdata}\n`, error => {
                if (error) {
                    console.log(error);
                }
            });
        });
    }
    if (anweser.format === "license") {
        inquirer.prompt([{
            type: "list",
            name: "file",
            message: "Select to license",
            choices: [
                {
                    key: "mit",
                    value: "mit"
                }
            ]
        },{
            name: "nameuser",
            messaege: "Write a your name"
        },{
            name: "year",
            messaege: "Write actual year"
        }]).then(anwese2 => {
            if (anwese2.file === "mit") {
                fs.writeFile("LICENSE", 
`MIT License

Copyright (c) ${anwese2.year} ${anwese2.nameuser}
                
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
                
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
                
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`, error => {
                    if (error) {
                        console.log(error);
                    }
                });
            }
        });
    }
});