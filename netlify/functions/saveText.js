const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async (event) => {
  if (event.httpMethod === 'POST') {
    const { text } = JSON.parse(event.body);

    // Save the text to Supabase
    const { error } = await supabase
      .from('text_storage')
      .upsert({ id: 1, text }); // Use a fixed ID for simplicity

    if (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving text' }),
      };
    }

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