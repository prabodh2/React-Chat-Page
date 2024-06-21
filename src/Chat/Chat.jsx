// src/Chat.js
import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="chat-container">
      <div className="chat-space">
        <MessageList messages={messages} />
        <MessageInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chat;
