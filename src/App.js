import React, { useState } from 'react';
import './App.css';
import MessageInput from './MessageInput';
import MessageDisplay from './MessageDisplay';
import Sessions from './Sessions'; // Import the Sessions component
import './database.js';

function App() {
    const [messages, setMessages] = useState([]);

    const handleSend = (message) => {
        if (message) {
            setMessages([...messages, message]);
        }
    };

    return (
        <>
            <div className="App">
                <MessageInput onSend={handleSend} />
                <MessageDisplay messages={messages} />
            </div>
            <div>
                <h1>Main Chat Application</h1>
                <div className="chat-container">
                    {/* Your chat interface */}
                </div>
                <div className="sidebar">
                    <Sessions /> {/* Add the Sessions component here */}
                </div>
            </div>
        </>
    );
}

export default App;
