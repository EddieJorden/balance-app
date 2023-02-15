import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { updateUserProfile } from './userProfileSlice';

const StyledLoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: #1c1c1e;
  color: white;

  form {
    background-color: #2f2f31;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
    max-width: 520px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeIn 0.5s ease-in-out;

    @media (max-width: 380px) {
      form {
        width: auto;
        height: auto;
        min-height: 100vh;
      }
    }

    @media (max-width: 767px) {
      form {
        width: 100%;
        max-width: 100%;
      }
    }
    
    

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    h2 {
      margin-bottom: 30px;
    }

    input[type="text"],
    input[type="email"] {
      width: 100%;
      padding: 15px;
      margin-bottom: 20px;
      border: none;
      border-radius: 5px;
      background-color: #3a3a3c;
      color: white;
      font-size: 18px;
      transition: all 0.2s ease-in-out;

      &:focus {
        outline: none;
        box-shadow: 0px 0px 10px 0px rgba(255, 255, 255, 0.5);
      }
    }

    input[type="submit"] {
      width: 100%;
      padding: 15px;
      margin-top: 30px;
      border: none;
      border-radius: 5px;
      background-color: #00c853;
      color: white;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #1de9b6;
      }
    }
  }
`;

function LoginScreen() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userProfile = { username, email };
    dispatch(updateUserProfile(userProfile) as any);
  };

  return (
    <StyledLoginContainer>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </StyledLoginContainer>
  );
}

export default LoginScreen;
