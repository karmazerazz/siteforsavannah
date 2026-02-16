import React from 'react';

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="glass-panel" style={{ textAlign: 'center', padding: 'var(--panel-padding)', animation: 'fadeIn 2s ease-in' }}>
      <h1 className="hero-title">
        Je t'aime
      </h1>
      <div className="hearttrace" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '2rem' }}>
        ❤️
      </div>
      <p className="text-body">
        Un petit endroit juste pour toi, quand tu en as besoin.
      </p>
      <button 
        className="btn-emotion" 
        onClick={onStart}
        style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}
      >
        Entrer
      </button>
    </div>
  );
};

export default WelcomeScreen;
