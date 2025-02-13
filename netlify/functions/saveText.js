exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body);

    // Save the text to an environment variable
    process.env.STORED_TEXT = text;

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