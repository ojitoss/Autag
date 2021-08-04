# atuag - Automatic code generator
[gitHub repository](https://github.com/ojitoss/Autag)

autag is a tool that generates code automatically through the terminal.

## Parts of documentation:
  * [Installation and Usage](#Usage)
  * [md - format](#md)
  * [npmignore - format](#npmignore)
  * [gitignore - format](#gitignore)
  * [license - file](#license)
  * [license sofware](#sofware)

## Installation:
    npm install autag

# Usage:
To start using **autag** you must type the following command:
```
npx autag
```
After that you will see the following After that you will see the following:
```
Select a format
md
license
```

## md - format:
If you chose **md** then on the console I will say the next:
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

If you chose **paragraph** you will have the following message on the console:
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

If you chose **paragraph** you will have the following message on the console:
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
Select a format: md
Write a file: hello
Select to type text: paragraph
Write a image name: Hello
Write a link to image: https://image
```

### This will write to the 'hello.md' file
```md
![Hello](https://image)
```

If you chose **paragraph** you will have the following message on the console:
```
Write a text to quote
```

## Explame: 
### Console
```
Select a format: md
Write a file: hello
Select to type text: quote
Write a text to quote: Hello!
```

### This will write to the 'hello.md' file
```md
> Hello!
```

## npmignore - format
If you chose **npmignore** then on the console I will say the next question:
```
Writes a files ignores of npm
```

## Explame:
### Console: 
```
Select a format: npmignore
Write a files ignores of npm: test.js
```

### This will write to the '.npmignore' file:
```
test.js
```

## npmignore - format
If you chose **npmignore** then on the console I will say the next question:
```
Writes a files ignores of git
```

## Explame:
### Console: 
```
Select a format: gitignore
Write a files ignores of git: test.js
```

### This will write to the '.gitignore' file:
```
test.js
```

## license - file:
If you chose **license** then on the console I will say the next question:
```
Select to license
mit
```
If you chose **mit** then on the consoel I will say next question:
```
username:
```
You will have to put your name.

After of question: 
```
year:
```
You must put the year where the software was created.

### Explame:
```
Select to format: license
nameuser: ojitos
year: 2021

This will be done in the LICENSE file: 


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

## Sofware license:
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