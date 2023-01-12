import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface ChatMessage {
  message: string;
  sender: string;
  id: string | number;
}

interface Props {
  apiUrl: string;
}

const ChatMessages = styled.div`
  height: 400px;
  overflow-y: scroll;
  padding: 10px;
  margin: 0px 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

const Form = styled.form`
  display: flex;
  margin-top: 10px;
  padding: 0px 20px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 5px;
  border-radius: 5px;
  border: none;
  margin-right: 5px;
`;

const Button = styled.button`
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

function ChatWindow({ apiUrl }: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('greet me with a joke');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: ChatMessage = { message: inputText, sender: 'Me', id: Date.now() };
    const response = await axios.get(`${apiUrl}?prompt=${inputText}`);
    const newResponse: ChatMessage = { message: response.data.choices[0].text, sender: 'AI', id: Date.now() + 1 };
    setMessages([...messages, newMessage, newResponse]);
    setInputText('');
  };

  return (
    <div>
      <ChatMessages>
        {messages.map((message) => (
          <div key={message.id} style={{ color: message.sender === 'Me' ? 'green' : 'blue' }}>
            <p>
              {message.sender}
              :
              {' '}
              {message.message}
            </p>
          </div>
        ))}
      </ChatMessages>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}

export default ChatWindow;
