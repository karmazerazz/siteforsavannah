import React, { useEffect, useState } from 'react';
import { getRandomMessage } from '../data/messages';
import { sendNotification } from '../services/discord';

const ComfortDisplay = ({ emotion, onBack }) => {
  const [message, setMessage] = useState('');
  const [displayedText, setDisplayedText] = useState('');
  const [notified, setNotified] = useState(false);

  useEffect(() => {
    let category = emotion;
    if (emotion === 'miss') category = 'lonely';
    
    const msg = getRandomMessage(category);
    setMessage(msg);

    // Typewriter effect
    let i = 0;
    setDisplayedText('');
    const timer = setInterval(() => {
      setDisplayedText((prev) => msg.substring(0, i + 1));
      i++;
      if (i >= msg.length) clearInterval(timer);
    }, 40);

    const userPing = "<@1326084715807244368>";
    const alertText = `${userPing}, Savannah a besoin de toi ! Elle ressent : ${emotion}.`;
    
    sendNotification(alertText).then(() => {
      setNotified(true);
    });

    return () => clearInterval(timer);
  }, [emotion]);

  const emotionIcons = {
    lonely: '🌑',
    sad: '💧',
    attention: '✨',
    afraid: '🛡️',
    nightmare: '🌌',
    ugly: '🥀',
    doubt: '🌪️',
    hug: '🫂',
    miss: '💔'
  };

  return (
    <div className="glass-card" style={{ textAlign: 'center', maxWidth: '800px' }}>
      <div className="big-icon-floating">
        {emotionIcons[emotion] || '❤️'}
      </div>
      
      <div className="message-box">
        {displayedText}
      </div>
      
      {notified && (
        <div style={{ 
          fontSize: '1rem', 
          color: 'var(--secondary)', 
          marginTop: '2rem', 
          fontStyle: 'italic',
          letterSpacing: '1px',
          animation: 'fadeIn 2s'
        }}>
          « Je viens de recevoir ton signal... J'arrive vers toi. »
        </div>
      )}

      <button 
        className="btn-celestial" 
        onClick={onBack}
        style={{ marginTop: '4rem', maxWidth: '250px', margin: '4rem auto 0', fontSize: '1rem' }}
      >
        <span>🔙</span> Retour
      </button>

      <div style={{ 
        position: 'absolute', 
        bottom: '20px', 
        left: '0', 
        width: '100%', 
        fontSize: '0.8rem', 
        opacity: 0.3,
        letterSpacing: '3px'
      }}>
        L'AMOUR EST ÉTERNEL
      </div>
    </div>
  );
};

export default ComfortDisplay;
