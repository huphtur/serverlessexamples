const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body);
    const filePath = path.join('/tmp', 'storedText.txt');

    // Save the text to a file
    fs.writeFileSync(filePath, text);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Text saved!' }),
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' }),
  };
};