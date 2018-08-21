const createFile = require('../utils/createFile');
const createDir = require('../utils/createDir');
const templateMap = require('../utils/templates');

module.exports = (args) => {
  const [songTitle, date] = args._;
  console.log('SONGSHELL WRITING FILES FOR:', songTitle);
  createDir(songTitle);
  Object.keys(templateMap).forEach(template => {
    const text = templateMap[template](songTitle, date);
    createFile(`./${songTitle}/${template}${songTitle}.txt`, text);
  });
};