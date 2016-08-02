## 24h du Jeu

Web app for board game players to mark known games. Built using Flask and React.js


## Installation

	$ cd 24h-du-jeu
	$ pip install -r requirements.txt
	$ cd 24h-du-jeu
	$ npm install

### Downloading images from bgg:

First install imagemagick, then:


 	$ pip install requirements-dev.txt
 	$ ./bin/download-images


## Running

	$ python server/manage.py run

then, in another window:

	$ cd client
	$ npm start

and go to http://localhost:8080 in a browser.


## License

Copyright (c) 2016 Martin Ogden


Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
