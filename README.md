# atuag - Automatic code generator
[gitHub repository](https://github.com/ojitoss/Autag)

autag is a tool that generates code automatically through the terminal.

## Parts of documentation:
  * [important](#important)
  * [Upgrades](#Upgrades)
  * [Changelog](#Changelog)
  * [Installation and Usage](#Usage)
  * [File](#file)
    * [md](#md)
    * [create](#create)
  * [Ignore](#ignore)
    * [npm](#npm)
    * [git](#git)
    * [eslint](#eslint)
  * [mkdir](#mkdir)
    * [normal](#normal)
  * [License](#license)
    * [mit](#mit)
  * [translate](#translate)
    * [text](#text-translate)
  * [rename](#rename)
    * [normal](#normal-rename)
  * [remove](#remove)
    * [normal](#normal-remove)
  * [read](#read)
    * [normal](#normal-read)
  * [local](#local)
    * [normal](#normal-local)
  * [render](#render)
    * [file](#file-render)
    * [text](#text-render)
  * [license sofware](#sofware)
____

## important:
  - In the 'local and render' commands you must have express and the template engine installed
___

## Upgrades:    
*version: 2.8.5*
  * Local and render options added
  * Option create added options file
____

## Changelog:
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

## Installation:
    npm install autag

# Usage:
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
```
___

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
Select a type folder:
normal
```
___

## normal:
If you chose **mkdir & normal** then on the console I will say the next:
```
Write a name folder
```

## Explame: 
### Console:
```
Select the option you want to execute: mkdir
Select type folder: normal
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
Select the type of translation you are going to execute
file
text
```
___

## text-translate:
If you chose **translate & file** then on the console I will say the next:
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
Select the type of rename
normal
```
___

## normal-rename:
If you chose **rename & normal** then on the console I will say the next:
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
Select option of rename: normal
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
Select to remove
normal
```
___

## normal-remove:
If you chose **remove & normal** then on the console I will say the next:
```
Write file remove
```

## Explame:
### Console: 
```
Select the option you want to execute: remove
Select option remove: normal
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
Select to read
normal
```
___

## normal-read:
If you chose **read & normal** then on the console I will say the next:
```
Write file read
```

## Explame:
### Console: 
```
Select the option you want to execute: remove
Select option remove: normal
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
Select type local
normal
```
___

## normal-local:
If you chose **local & normal** then on the console I will say the next:
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

## local:
If you chose **local** then on the console I will say the next:
```
Select type local
normal
```
___

## normal-local:
If you chose **local & normal** then on the console I will say the next:
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

## local:
If you chose **local** then on the console I will say the next:
```
Select type local
normal
```
___

## normal-local:
If you chose **local & normal** then on the console I will say the next:
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
Select type local: normal
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

## sofware license:
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