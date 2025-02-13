const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

exports.handler = async () => {
  // Fetch the text from Supabase
  const { data, error } = await supabase
    .from('text_storage')
    .select('text')
    .eq('id', 1)
    .single();

  if (error || !data) {
    return {
      statusCode: 200,
      body: JSON.stringify({ text: 'No text available.' }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ text: data.text }),
  };
};