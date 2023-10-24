import React from 'react';

function MessageDisplay({ messages }) {
  return (
    <div>
      <h2>Messages:</h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageDisplay;
