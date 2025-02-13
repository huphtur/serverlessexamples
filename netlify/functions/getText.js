const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const filePath = path.join('/tmp', 'storedText.txt');

  console.log('Reading text from:', filePath); // Debugging

  try {
    if (fs.existsSync(filePath)) {
      const text = fs.readFileSync(filePath, 'utf8');
      console.log('Text retrieved successfully:', text); // Debugging
      return {
        statusCode: 200,
        body: JSON.stringify({ text }),
      };
    } else {
      console.log('No text file found.'); // Debugging
      return {
        statusCode: 200,
        body: JSON.stringify({ text: 'No text available.' }),
      };
    }
  } catch (error) {
    console.error('Error reading text:', error); // Debugging
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error reading text' }),
    };
  }
};