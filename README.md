# Front-end Challenge

## Installation
To install this project, clone the project into a directory on your machine and run `npm install` from within the project folder.

## Building
To build the template, you can run `npm run build` from within the project folder.

## Setup
The file located at [./build/twig.js](./build/twig.js) can be used to compile Twig files to HTML. It can be used in the following way:

`node ./build/twig.js [param1] [param2]`

The first parameter is mandatory, and should be used to indicate which twig template should be rendered. Variables in the Twig file can be defined in a .json file at the same location and with the exact same name as the .twig file it should be added for. By using this naming convention, it will automatically be included when rendering a twig file, without the need to define it as a separate option. If you want to use another filename, you will have to explicitly include it as the second parameter.

For example, `node ./build/twig.js ./menu.twig` will render the ./menu.twig file using the data defined in ./menu.json

The resulting HTML will be written to an HTML file with the same name as the twig file (except for the file extension). In the above example, the resulting file will be named ./menu.html