import React, { useState } from 'react';

const Sessions = () => {
  const [sessions, setSessions] = useState(['Default Session']);
  const [newSessionName, setNewSessionName] = useState('');
  const [activeSession, setActiveSession] = useState('Default Session');

  const createNewSession = () => {
    if (newSessionName.trim() !== '') {
      setSessions([...sessions, newSessionName]);
      setNewSessionName('');
    }
  };

  const switchToSession = (sessionName) => {
    setActiveSession(sessionName);
  };

  return (
    <div>
      <h2>Sessions</h2>
      <button onClick={createNewSession}>New Session</button>
      <ul>
        {sessions.map((session) => (
          <li key={session} onClick={() => switchToSession(session)}>
            {session}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sessions;
