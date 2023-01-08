import { useState } from 'react';
import { prefix } from './utils';

async function fetchChatGptResponse(prompt: string) {
  try {
    const response = await fetch(`${prefix}/fetch-chatgpt-response?prompt=${prompt}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return 'error';
  }
}

function ChatGPT() {
  const [response, setResponse] = useState<any>(null);

  const handleClick = async () => {
    const prompt = 'Hello, how are you?';
    const data = await fetchChatGptResponse(prompt);
    console.log(data.choices[0].text);
    setResponse(data.choices[0]);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Fetch ChatGpt Response</button>
      {response && <p>{response.text}</p>}
    </div>
  );
}

export default ChatGPT;
