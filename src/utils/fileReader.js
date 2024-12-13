const fs = require('fs');
const path = require('path');

function readInsultsFile() {
  try {
    const filePath = path.join(process.cwd(), 'nah.hacker');
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split('\n').filter(line => line.trim() !== '');
  } catch (error) {
    console.error('Error reading insults file:', error);
    return [];
  }
}

module.exports = {
  readInsultsFile
};