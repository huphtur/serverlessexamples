exports.handler = async () => {
  const text = process.env.STORED_TEXT || 'No text available.';

  return {
    statusCode: 200,
    body: JSON.stringify({ text }),
  };
};