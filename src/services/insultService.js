const { readInsultsFile } = require('../utils/fileReader');

function getRandomInsult() {
  const insults = readInsultsFile();
  if (insults.length === 0) {
    return 'No insults available';
  }
  return insults[Math.floor(Math.random() * insults.length)];
}

module.exports = {
  getRandomInsult
};