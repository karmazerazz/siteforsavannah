import React from 'react';

const Dashboard = ({ onSelectEmotion }) => {
  const emotions = [
    { id: 'lonely', label: 'Je me sens seule...', icon: '🌑' },
    { id: 'sad', label: 'Je suis triste', icon: '😢' },
    { id: 'attention', label: 'Besoin d\'attention', icon: '🥺' },
    { id: 'afraid', label: 'J\'ai peur', icon: '😨' },
    { id: 'nightmare', label: 'J\'ai fait un cauchemar', icon: '👿' },
    { id: 'ugly', label: 'Je me sens pas belle', icon: '🥀' },
    { id: 'doubt', label: 'Je doute de nous', icon: '🌪️' },
    { id: 'hug', label: 'Besoin d\'un câlin', icon: '🫂' },
    { id: 'miss', label: 'Tu me manques', icon: '💔' },
  ];

  return (
    <div className="glass-panel" style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
      <h2 className="panel-title">
        Comment te sens-tu mon cœur ?
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        maxHeight: '60vh',
        overflowY: 'auto',
        padding: '0.5rem' 
      }}>
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            className="btn-emotion"
            onClick={() => onSelectEmotion(emotion.id)}
          >
            <span style={{ marginRight: '10px' }}>{emotion.icon}</span>
            {emotion.label}
          </button>
        ))}
        <button
          className="btn-emotion"
          onClick={() => onSelectEmotion('breathing')}
          style={{ borderColor: 'var(--accent-color)', gridColumn: '1 / -1' }}
        >
          <span>🌬️</span> J'ai besoin de respirer
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
