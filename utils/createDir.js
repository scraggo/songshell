const fs = require('fs');

const createDir = (dirName) => {
  // const dir = './tmp';  
  if (fs.existsSync(dirName)) {
    console.log('Error: Specified path already exists. ' + dirName);
    process.exit(1);
  }
  fs.mkdirSync(dirName);
};

module.exports = createDir;
