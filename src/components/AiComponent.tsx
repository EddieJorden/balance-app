import React, { useState, FormEvent, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { prefix } from './utils';

interface ChatMessage {
  message: string;
  sender: string;
  id: string | number;
}

const ChatMessages = styled.div`
  height: 400px;
  max-width: 500px;
  width: 80vw;
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

function AiComponent() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputText, setInputText] = useState('');
  const chatBoxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const apiUrl = `${prefix}/fetch-chatgpt-response`;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMessage: ChatMessage = { message: inputText, sender: 'Me', id: Date.now() };
    setMessages([...messages, newMessage]);
    setInputText('');
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    const response = await axios.get(`${apiUrl}?prompt=${inputText}`);
    const newResponse: ChatMessage = { message: response.data.choices[0].text, sender: 'AI', id: Date.now() + 1 };
    setMessages([...messages, newMessage, newResponse]);
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  };

  return (
    <div>
      <div>Ask Eddie Anything</div>
      <ChatMessages ref={chatBoxRef}>
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
          placeholder="Type your message here"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          ref={inputRef}
        />
        <Button type="submit">Send</Button>
      </Form>
    </div>
  );
}

export default AiComponent;
