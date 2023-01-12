import { useState } from 'react';
import styled from 'styled-components';
import { prefix } from './utils';

const StyledDiv = styled.div`
  /* Make the div responsive */
  width: 80%;
  height: 15%;

  /* Make the div scrollable if the text is too long */
  overflow: auto;

  /* Set the font and font size */
  font-family: Arial, sans-serif;
  font-size: 16px;

  /* Add some spacing around the text */
  padding: 10px;
  
  /* Set the background color to light grey*/
  // background-color: #FFFFFF;
`;

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
  const [userInput, setUserInput] = useState<any>(null);

  const handleChange = (e: any) => {
    setUserInput(e.target.value);
  };

  const handleClick = async () => {
    const data = await fetchChatGptResponse(userInput);
    console.log(data.choices[0].text);
    setResponse(data.choices[0]);
  };

  return (
    <div>
      <div>Enter a message for your assistant below</div>
      <input
        placeholder="Enter Text for your AI assistant here"
        onChange={(e: any) => { handleChange(e); }}
        style={{
          borderRadius: '3px',
          margin: '6px',
          cursor: 'pointer',
          height: '33px',
          width: '260px',
          fontSize: '18px',
        }}
      />
      <button type="button" onClick={handleClick}>send</button>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <StyledDiv>
          {response && response.text}
        </StyledDiv>
      </div>
    </div>
  );
}

export default ChatGPT;
