import React, { useState, useEffect } from 'react';
import { sendNotification } from '../services/discord';

const BreathingExercise = ({ onBack }) => {
  const [stage, setStage] = useState('Prépare-toi...');
  const [scale, setScale] = useState(0.8);

  useEffect(() => {
    sendNotification("⚠️ Savannah a lancé un murmure de paix (respiration). Elle a besoin de calme.");

    const breathe = () => {
      setStage('Inspire doucement...');
      setScale(1.6);
      
      setTimeout(() => {
        setStage('Retiens la lumière...');
        setScale(1.7);
        
        setTimeout(() => {
          setStage('Expire la fatigue...');
          setScale(0.8);
        }, 4000);
      }, 4000);
    };

    breathe();
    const interval = setInterval(breathe, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-card" style={{ textAlign: 'center' }}>
      <h2 className="title-celestial" style={{ fontSize: '3rem' }}>Murmure de Paix</h2>
      
      <div style={{ 
        height: '400px', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        margin: '2rem 0'
      }}>
        {/* Outer Glow */}
        <div style={{
          position: 'absolute',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: 'var(--primary-glow)',
          filter: 'blur(100px)',
          transform: `scale(${scale * 1.5})`,
          transition: 'transform 4s ease-in-out',
          opacity: 0.5
        }}></div>

        {/* Breathing Sphere */}
        <div style={{
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(229, 161, 150, 0.2))',
          border: '1px solid rgba(255,255,255,0.3)',
          transform: `scale(${scale})`,
          transition: 'transform 4s ease-in-out',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: 'inset 0 0 40px rgba(255,255,255,0.1), 0 0 50px rgba(229, 161, 150, 0.3)',
          backdropFilter: 'blur(10px)',
          zIndex: 2
        }}>
          <div style={{ 
            fontFamily: 'var(--font-display)', 
            fontSize: '1.1rem', 
            fontWeight: '400',
            color: '#fff',
            fontStyle: 'italic',
            textShadow: '0 2px 10px rgba(0,0,0,0.5)',
            textAlign: 'center',
            padding: '20px'
          }}>
            {stage}
          </div>
        </div>
      </div>

      <p className="title-hand" style={{ fontSize: '2.5rem', opacity: 0.7 }}>
        Je suis avec toi.
      </p>

      <button className="btn-celestial" onClick={onBack} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <span>✨</span> Je me sens sereine
      </button>
    </div>
  );
};

export default BreathingExercise;
