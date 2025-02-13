const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join('/tmp', 'storedText.txt');

  // Read the text from the file
  let text = 'No text available.';
  if (fs.existsSync(filePath)) {
    text = fs.readFileSync(filePath, 'utf8');
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ text }),
  };
};