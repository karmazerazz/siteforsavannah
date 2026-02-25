import React from 'react';

const Dashboard = ({ onSelectEmotion }) => {
  const emotions = [
    { id: 'lonely', label: 'L\'Absence', icon: '🌑', desc: 'Quand je suis loin de toi' },
    { id: 'sad', label: 'La Tristesse', icon: '💧', desc: 'Besoin d\'un rayon de soleil' },
    { id: 'attention', label: 'L\'Attention', icon: '✨', desc: 'Dis-moi que je suis tienne' },
    { id: 'afraid', label: 'La Peur', icon: '🛡️', desc: 'Sois mon bouclier' },
    { id: 'nightmare', label: 'Le Sommeil', icon: '🌌', desc: 'Chasse mes mauvais rêves' },
    { id: 'ugly', label: 'Le Doute', icon: '🥀', desc: 'Rappelle-moi ma beauté' },
    { id: 'doubt', label: 'L\'Incertitude', icon: '🌪️', desc: 'Rassure notre lien' },
    { id: 'hug', label: 'La Tendresse', icon: '🫂', desc: 'Besoin d\'un câlin éternel' },
    { id: 'miss', label: 'Le Manque', icon: '💔', desc: 'Mon cœur te cherche' },
  ];

  return (
    <div className="glass-card" style={{ maxWidth: '1000px', padding: '3rem 2rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="title-celestial" style={{ fontSize: 'clamp(2rem, 6vw, 3.5rem)' }}>
          Comment vibre ton cœur ?
        </h2>
        <div className="title-hand" style={{ fontSize: '3rem' }}>
          choisis ton émotion
        </div>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '1rem',
        maxHeight: '65vh',
        overflowY: 'auto',
        padding: '0.8rem',
        borderRadius: '20px',
        background: 'rgba(0,0,0,0.1)'
      }}>
        {emotions.map((emotion) => (
          <button
            key={emotion.id}
            className="btn-celestial"
            onClick={() => onSelectEmotion(emotion.id)}
            style={{ 
              flexDirection: 'column', 
              padding: '2rem', 
              textAlign: 'center',
              height: 'auto',
              borderRadius: '30px'
            }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{emotion.icon}</span>
            <div style={{ fontWeight: '600', fontSize: '1.2rem', color: 'var(--primary)' }}>{emotion.label}</div>
            <div style={{ fontSize: '0.85rem', opacity: 0.6, marginTop: '5px', textTransform: 'none', letterSpacing: '0.5px' }}>
              {emotion.desc}
            </div>
          </button>
        ))}
      </div>

      <footer style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
        <button
          className="btn-celestial"
          onClick={() => onSelectEmotion('breathing')}
          style={{ 
            maxWidth: '500px', 
            border: '2px solid var(--secondary)',
            background: 'rgba(212, 175, 55, 0.05)' 
          }}
        >
          <span>🌬️</span> Murmure de Paix (Respiration)
        </button>
      </footer>
    </div>
  );
};

export default Dashboard;
