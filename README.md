![autag_logo](assets/autag_logo_complete.png)

[![npm](https://badge.fury.io/js/autag.svg)](http://badge.fury.io/js/autag)
[![downloads](https://img.shields.io/npm/dt/autag.svg)](https://img.shields.io/npm/dt/autag.svg)
[![NPM](https://img.shields.io/npm/l/autag)](https://img.shields.io/npm/l/autag)

> autag is a process automation tool through the terminal.

[![NPM](https://nodei.co/npm/autag.png)](https://www.npmjs.com/package/autag)

## Table of contents:
  * [important](#important)
  * [Upgrades](#upgrades-and-changelog)
  * [Changelog](#upgrades-and-changelog)
  * [Installation and Usage](#usage)
  * [Config file](#config-file)
  * [File](#file)
    * [md](#md-file)
    * [create](#creat-file)
  * [Ignore](#ignore)
    * [npm](#npm-ignore)
    * [git](#git-ignore)
    * [eslint](#eslint-ignore)
  * [Mkdir](#mkdir)
  * [License](#license)
    * [mit](#mit-license)
  * [Translate](#translate)
  * [Rename](#rename)
  * [Remove](#remove)
  * [Read](#read)
  * [local](#local)
  * [Render](#render)
    * [file](#file-render)
    * [text](#text-render)
  * [Copy](#copy)
  * [Minify](#minify)
  * [Search](#search)
  * [license sofware](#license-software)
____

## important:
- In the folder ```node_modules / autag``` there will be the folder ```.autag``` where the configuration file is and when you use some commands other files will be created, do not delete them or autag will not work
- In the 'local and render' commands you must have express and the template engine installed
___

<details><summary id="upgrades-and-changelog">upgrades and changelog</summary>

## upgrades:    
*version: 3.4.4*
  * file options with suboption md is was improvided
  * Fixed a small error with documentation
  * Fixed an issue that made it impossible to use autag
____

## changelog:
3.4.4
  * file options with suboption md is was improvided
  * Fixed a small error with documentation
  * Fixed an issue that made it impossible to use autag

3.3.3
  * Search options added
  * Fixed a small error with documentation

3.2.2
  * Fixed an issue that made it impossible to use autag
  * Fixed a small error with the documentation

3.2.1
  * Minify options added

3.1.1
  * Copy options added
  * .npmignore file added
  * Fixed a small bug with the terminal
  * Documentation was improved

3.0.0
  * Added '.autag' folder for some settings
  * Added a config file to configure some autag stuff
  * Documentation was improved
  * Fixed 'README.md' problem

2.8.5
  * Local and render options added
  * Option create added options file

2.7.5
  * Now the red option has syntax highlighting
  * Fixed a small bug with the terminal

2.6.5
  * The interface of the cli autag has been improved

2.5.5
  * Fixed a small error with the documentation

2.5.4
  * Read options added
  * Fixed a small error with the documentation

2.4.3
  * Remove options added
  * Fixed a small error with the documentation
  * CHANGELOG.md file added

2.3.2 
  * Rename options added
  * Remove the file option in translate because it did not work

2.2.1
  * Translation options added
  
2.1.1
  * Fixed a small error with the documentation

2.0.1
  * Eslint was added to the ignore

2.0.0
  * The tool interface has been restructured
  * More code was ordered
  * Add mkdir option to add folders
  * Doumentacoion was improved

1.2.3
  * Fixed a small error with the documentation

1.2.2
  * Add the github repository

1.0.3
  * Fixed a small error with the documentation

1.0.2
  * Add the gitignore and npmignore formats

1.0.1
  * Fixed a small error with the documentation

1.0.0
  * You could create md and LICENSE files
____
</details><br>

## installation:
    npm install autag

# usage:
To start using **autag** you must type the following command:
```
npx autag
```
After that you will see the following After that you will see the following:
```
Select the option you want execute
file
ignore
mkdir
license
translate
rename
remove
read
local
render
copy
minify
search
```
___

## config-file:
In the folder ```.autag``` a file ```config.json``` is created where you will be able to configure autag.

### In config.json there will be this content::
```json
{
  "paths": {
    "localhost": {
      "name": "",
      "rout": ""
    }
  }
}
```
- paths: The routes of some commands are configured.
  - localhost: It is used to put the name and path of the localhost.
    - name: It is used to name the localhost of the local option and render.
    - route: It is used to put the localhost path of the local option and render.

## file:
If you chose **file** then on the console I will say the next:
```
Select a format
md
```
___

## md:
If you chose **file & md** then on the console I will say the next:
```
Write a file name
```
You must put the name of the file to create with the md format.

Then he will ask you the following:
```
Select to type text
title
paragraph
block
board
list
link
image
quote
```

If you chose **title** you will have the following message on the console:
```
Select a title type
title 1
title 2
title 3
title 4
title 5
title 6
```

Then he will ask you the following:
```
Write a title
```

## Explame:
### Console:
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select a title type: title 1
Write a title: hello!
```
### This will write to the 'hello.md' file:
```md
# hello!
```

If you chose **paragraph** then on the console I will say the next:
```
Write a paragraph
```

## Explame: 
### Console: 
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Write a paragraph: hello!
```

### This will write to the 'hello.md' file:
```md
hello!
```

If you chose **block** then on the console I will say the next:
Then he will ask you this:
```
Select a type block
Text
JavaScript
Python
```

Then he will ask you this:
```
Write a data block
```

## Explame:
### Console:
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: block
Select to type block: JavaScript
Write a data block: console.log('Hello!')
```

### This will write to the 'hello.md' file:
```md
```javascript
console.log('Hello!')
```

If you chose **board** you will have the following message on the console:
```
Write a column
```

Then he will ask you this:
```
Write a row
```

## Explame: 
### Console
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: board
Write a column: Hello!
Write a row: World!
```

### This will write to the 'hello.md' file
```md
| Hello! |
|--------|
| World! |
```

If you chose **list** you will have the following message on the console:
```
Select a type of list
desorderly
ordinate
```

Then he will ask you this:
```
Write a data list
```

## Explame: 
### Console
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: list
Select a type of list: desorderly
Write a data list: Hello!
```

### This will write to the 'hello.md' file
```md
* Hello!
```

If you chose **link** you will have the following message on the console:
```
Write a link name
```

Then he will ask you this:
```
Write a link
```

## Explame: 
### Console
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: link
Write a link name: Hello
Write a link: https://hello
```

### This will write to the 'hello.md' file
```md
[Hello](https://hello)
```

If you chose **image** you will have the following message on the console:
```
Write a image name
```

Then he will ask you this:
```
Write a link to image
```

## Explame: 
### Console
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: image
Write a image name: Hello
Write a link to image: https://image
```

### This will write to the 'hello.md' file
```md
![Hello](https://image)
```

If you chose **quote** you will have the following message on the console:
```
Write a text to quote
```

## Explame: 
### Console
```
Select the option you want to execute: file
Select a format: md
Write a file: hello
Select to type text: quote
Write a text to quote: Hello!
```

### This will write to the 'hello.md' file
```md
> Hello!
```
___

## create:
If you chose **file & create** then on the console I will say the next question:
```
Write file name file
```

## Explame:
### Console: 
```
Select the option you want to execute: file
Select a format: create
Write file name file: test.js
```

## ignore:
If you chose **ignore** then on the console I will say the next:
```
Select a files ignores tool
npm 
git
```
___

## npm:
If you chose **ignore & npm** then on the console I will say the next question:
```
Writes a files ignores of npm
```

## Explame:
### Console: 
```
Select the option you want to execute: ignore
Select a files ignores tool: npm
Write a files ignores of npm: test.js
```

### This will write to the '.npmignore' file:
```
test.js
```
___

## git:
If you chose **ignore & git** then on the console I will say the next question:
```
Writes a files ignores of git
```

## Explame:
### Console: 
```
Select the option you want to execute: ignore
Select a files ignores tool: git
Write a files ignores of git: test.js
```

### This will write to the '.gitignore' file:
```
test.js
```
___

## eslint:
If you chose **ignore & eslint** then on the console I will say the next question:
```
Writes a files ignores of eslint
```

## Explame:
### Console: 
```
Select the option you want to execute: ignore
Select a files ignores tool: eslint
Write a files ignores of git: test.js
```

### This will write to the '.eslintignore' file:
```
test.js
```
___

## mkdir:
If you chose **mkdir** then on the console I will say the next:
```
Write a name folder
```

## Explame: 
### Console:
```
Select the option you want to execute: mkdir
Write a name folder: hello
```
create a folder 'hello'
___

## license:
If you chose **license** then on the console I will say the next question:
```
Select to license
mit
```
___

# mit:
If you chose **license & mit** then on the console I will say next question:
```
Write a your name:
```
You will have to put your name.

After of question: 
```
Write actual year:
```
You must put the year where the software was created.

### Explame:
```
Select to format: license
Select to license: mit
Write a your name: ojitos
Write actual year: 2021
```

### This will write to the 'LICENSE' file:
```
MIT License

Copyright (c) 2021 ojitos
                
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
SOFTWARE.
```
___

## translate:
If you chose **translate** then on the console I will say the next:
```
Select the language you want to translate
en 
es
```

Then he will ask you this:
```
Write the text to translate
```
___

## rename:
If you chose **rename** then on the console I will say the next:
```
Write file to rename
```

Then he will ask you this:
```
Write new file rename
```

## Explame:
### Console: 
```
Select the option you want to execute: rename
Write file to rename: test.js
Write new file rename: testing.js
```

### Now the file is called:
```
testing.js
```
___

## remove:
If you chose **remove** then on the console I will say the next:
```
Write file remove
```

## Explame:
### Console: 
```
Select the option you want to execute: remove
Write file remove: test.js
```

### Now the file is called:
```
test.js
```
___

## read:
If you chose **read** then on the console I will say the next:
```
Write file read
```

## Explame:
### Console: 
```
Select the option you want to execute: remove
Write file read: test.js
```

### Say on the console:
```js
console.log('Hello world!');
```
___

## local:
If you chose **local** then on the console I will say the next:
```
Write folder to views
```

Then he will ask you this:
```
Write view endgine
```

Then he will ask you this:
```
Write port to localhost
```

## Explame:
### Console:
```
Select the option you want to execute: local
Write folder views: views
Write view endgine: ejs
Write portto localhost: 3000
```

### This will write to the 'localhost.js' file:
```js
const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view endgine", "ejs");

app.listen(3000, ()=> {
    console.log("Server on port", 3000);
})
```
___

## render:
If you chose **render** then on the console I will say the next:
```
Select type render
file
text
```
___

## file-render:
If you chose **render & file** then on the console I will say the next:
```
Select type petition
get
post
put
delete
patch
head
options
```

Then he will ask you this:
```
Write route
```

Then he will ask you this:
```
Write file render
```

## Explame:
### Console:
```
Select the option you want to execute: render
Select type render: file
Select type petition: get
Write route: /
Write file render: index.ejs
```

### This will write to the 'localhost.js' file:
```js
const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view endgine", "ejs");

app.listen(3000, ()=> {
    console.log("Server on port", 3000);
})

app.get("/", (req, res)=> {
  res.render('index.ejs');
})
```
___

## text-render:
If you chose **render & text** then on the console I will say the next:
```
Select type petition
get
post
put
delete
patch
head
options
```

Then he will ask you this:
```
Write route
```

Then he will ask you this:
```
Write text render
```

## Explame:
### Console:
```
Select the option you want to execute: render
Select type render: text
Select type petition: get
Write route: /
Write text render: hello world!
```

### This will write to the 'localhost.js' file:
```js
const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view endgine", "ejs");

app.listen(3000, ()=> {
    console.log("Server on port", 3000);
})

app.get("/", (req, res)=> {
  res.send('hello world!');
})
```
___

## copy:
If you chose **copy** then on the console I will say the next:
```
Write file to copy content
```

Then he will ask you this:
```
Write file to paste content
```

## Explame:
### Console: 
```
Select the option you want to execute: copy
Write file copy content: index.js
Write file paste content: test.js
```

### Write to file 'test.js':
```js
console.log('Hello world!');
```
___

## minify:
If you chose **minify** then on the console I will say the next:
```
Select format to minify
js
css
html
```

Then he will ask you this:
```
Write file to minify
```

## Explame:
### Console: 
```
Select the option you want to execute: minify
Select format to minify: js
Write file to minify: test
```

### Say to console:
```js
const test ="test";
```
___

## search:
If you chose **search** then on the console I will say the next:
```
Write file a search
```

Then he will ask you this:
```
Write text a sarch
```

## Explame:
### Console: 
```
Select the option you want to execute: minify
Write file a search: index.js
Write text a search: test
```

### Say to console:
```js
true
```
___

<details><summary id="license-software">license software</summary>

## license-software:
```
MIT License

Copyright (c) 2021 ojitos
                
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
SOFTWARE.
```
</details>