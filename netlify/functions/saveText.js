const fs = require('fs');
const path = require('path');

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body);
    const filePath = path.join('/tmp', 'storedText.txt');

    console.log('Saving text to:', filePath); // Debugging

    try {
      fs.writeFileSync(filePath, text);
      console.log('Text saved successfully:', text); // Debugging
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Text saved!' }),
      };
    } catch (error) {
      console.error('Error saving text:', error); // Debugging
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving text' }),
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' }),
  };
};