import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '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';

// eslint-disable-next-line react/prop-types
function ChatGPT({ userPrompt }: any) {
  const [text, setText] = useState('');

  useEffect(() => {
    const generateText = async (prompt: string, temperature: number): Promise<string> => {
      const response = await axios.post('https://api.openai.com/v1/completions', {
        prompt,
        temperature,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        best_of: 1,
        model: 'text-davinci-003',
        stop: ',',
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
      });

      return response.data.choices[0].text;
    };

    (async () => {
      const generatedText = await generateText(userPrompt, 0.5);
      setText(generatedText);
    })();
  }, [userPrompt]);

  return (
    <div>
      {text}
    </div>
  );
}

ChatGPT.defaultProps = {
  userPrompt: 'give me a nice greeting',
};

export default ChatGPT;
