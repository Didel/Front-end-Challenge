const fs = require('fs');
const Twig = require('twig');
const args = process.argv.slice(2);
const template = args[0];
const data = args[1];
let jsonData;

// Given a filename, return the JSON contents of that file.
function readJsonFile(fileName) {
  return JSON.parse(fs.readFileSync(fileName, 'utf8'));
}

// If no second argument is given, use a .json file with the same name as the 
// twig file as input data. (E.g.: Given ./product.twig, use ./product.json)
if (!data) {
  jsonFilePath = template.replace(/.twig$/gi, '.json');
  jsonData = readJsonFile(jsonFilePath)
}
else {
  jsonData = readJsonFile(data)
}

// Render the Twig file with the data.
Twig.renderFile(template, jsonData, (err, html) => {
  if (err) throw err;

  fs.writeFile(template.replace(/.twig$/gi, '.html'), html, function (err) {
    if (err) {
      return console.log(err);
    }

    console.log("The file was saved!");
  });
});
