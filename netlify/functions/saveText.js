let storedText = '';

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body);
    storedText = text;
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Text saved!' })
    };
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' })
  };
};