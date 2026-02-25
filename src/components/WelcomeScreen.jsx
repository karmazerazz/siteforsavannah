import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <div className="big-icon-floating">
        ✨
      </div>
      <h1 className="title-celestial">
        L'Amour Céleste
      </h1>
      <h2 className="title-hand">
        pour ma Savannah
      </h2>
      <p style={{ 
        fontSize: '1.2rem', 
        color: 'var(--text-muted)', 
        marginBottom: '3rem', 
        letterSpacing: '1px',
        maxWidth: '500px',
        margin: '0 auto 3rem'
      }}>
        Un sanctuaire éthéré où mes mots t'accompagnent, <br/>
        à chaque instant, à chaque émotion.
      </p>
      
      <button 
        className="btn-celestial" 
        onClick={onStart}
        style={{ maxWidth: '300px', margin: '0 auto' }}
      >
        <span>🔓</span> Ouvrir mon cœur
      </button>
      
      <div style={{ 
        marginTop: '3rem', 
        fontSize: '0.9rem', 
        color: 'var(--primary)', 
        opacity: 0.6,
        fontStyle: 'italic'
      }}>
        conçu avec tout mon être
      </div>
    </div>
  );
};

export default WelcomeScreen;
