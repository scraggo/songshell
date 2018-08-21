const fs = require('fs');

const createFile = (filename, text) => {
  fs.writeFile(filename, text, (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('File created: ' + filename.slice(2));
  });
};

module.exports = createFile;
