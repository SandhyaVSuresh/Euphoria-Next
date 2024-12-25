"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: 10px;
  h2{
    font-size:30px;
    margin: 15px 10px;
  }

  input{
    width: 80%;
    padding: 15px 10px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  button{
    font-size: 18px;
    margin: 10px 0;
    padding: 10px 20px;
    font-weight: 600;
    &:hover{
        background-color: #0088ff;
    }
  }
`;

const CloseButton = styled.button`
  background: #858282c0;
  padding: 5px;
  border-radius: 50%;
  border: none;
  font-size: 30px;
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
`;

export function Page({ onClose, onLoginSuccess }){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: username, 
        password: password, 
      });
      localStorage.setItem('token', response.data.token);
      onClose(); 
      onLoginSuccess();
    } catch (error) {
      alert('Login failed!');
      console.error(error);
    }
  };

  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Submit</button>
      </PopupContent>
    </PopupContainer>
  );
};
