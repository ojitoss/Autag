# atuag - Automatic code generator
[gitHub repository](https://github.com/ojitoss/Autag)

autag is a tool that generates code automatically through the terminal.

## Parts of documentation:
  * [Upgrades](#Upgrades)
  * [Changelog](#Changelog)
  * [Installation and Usage](#Usage)
  * [File](#file)
    * [md](#md)
  * [Ignore](#ignore)
    * [npm](#npm)
    * [git](#git)
  * [mkdir](#mkdir)
    * [normal](#normal)
  * [License](#license)
    * [license](#license)
  * [license sofware](#sofware)
____

## Upgrades:    
*version: 2.0.0*
  * The tool interface has been restructured
  * More code was ordered
  * Add mkdir option to add folders
  * Doumentacoion was improved
____

## Changelog:
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
If you chose **license & mit** then on the consoel I will say next question:
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