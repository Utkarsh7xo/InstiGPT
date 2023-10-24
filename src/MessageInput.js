import React, { useState } from 'react';

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    onSend(message);
    setMessage('');
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={handleMessageChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSendClick}>Send</button>
    </div>
  );
}

export default MessageInput;
