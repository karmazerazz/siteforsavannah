import React, { useEffect, useState } from 'react';
import { getRandomMessage } from '../data/messages';
import { sendNotification } from '../services/discord';

const ComfortDisplay = ({ emotion, onBack }) => {
  const [message, setMessage] = useState('');
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    let category = emotion;
    if (emotion === 'miss') category = 'lonely';
    
    const msg = getRandomMessage(category);
    setMessage(msg);

    const userPing = "<@1326084715807244368>";
    const alertText = `${userPing}, Savannah a besoin de toi ! Elle ressent : ${emotion}.`;
    
    sendNotification(alertText).then(() => {
      setNotified(true);
    });

  }, [emotion]);

  return (
    <div className="glass-panel" style={{ textAlign: 'center', maxWidth: '500px', animation: 'fadeIn 1.5s' }}>
      <div className="big-icon">
        ❤️
      </div>
      <h2 style={{ fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', marginBottom: '2rem', lineHeight: '1.5', fontFamily: 'var(--font-body)', fontWeight: '500' }}>
        {message}
      </h2>
      
      {notified && (
        <p style={{ fontSize: '1rem', color: 'var(--secondary-color)', marginTop: '2rem', fontStyle: 'italic', fontFamily: 'var(--font-body)' }}>
          Je viens de recevoir ton alerte sur mon téléphone. ❤️ J'arrive.
        </p>
      )}

      <button 
        className="btn-emotion" 
        onClick={onBack}
        style={{ marginTop: '3rem', fontSize: '1rem', padding: '0.8rem 2rem' }}
      >
        Retour
      </button>
    </div>
  );
};

export default ComfortDisplay;
