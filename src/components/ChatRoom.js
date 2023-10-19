// src/components/ChatRoom.js

import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const socket = socketIOClient('http://your-server-url');

  const handleSendMessage = () => {
    socket.emit('message', newMessage);
    setNewMessage('');
  };

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages, socket]);

  return (
    <div>
      <div>
        <div>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
