import React, { useState, useEffect } from 'react';
import { sendNotification } from '../services/discord';

const BreathingExercise = ({ onBack }) => {
  const [stage, setStage] = useState('Inspire...');
  const [scale, setScale] = useState(1);

  useEffect(() => {
    sendNotification("⚠️ Elle a lancé l'exercice de respiration. Elle a peut-être besoin de calme.");

    const breathe = () => {
      setStage('Inspire doucement...');
      setScale(1.5);
      
      setTimeout(() => {
        setStage('Retiens...');
        setScale(1.5);
        
        setTimeout(() => {
          setStage('Expire lentement...');
          setScale(1);
        }, 4000);
      }, 4000);
    };

    breathe();
    const interval = setInterval(breathe, 12000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel" style={{ textAlign: 'center', animation: 'fadeIn 1s' }}>
      <h2 className="panel-title">Respire avec moi</h2>
      
      <div style={{ 
        height: 'min(300px, 50vh)', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          width: 'min(150px, 40vw)',
          height: 'min(150px, 40vw)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(191,162,219,0.3) 0%, rgba(191,162,219,0.1) 70%)',
          border: '2px solid rgba(255,255,255,0.2)',
          transform: `scale(${scale})`,
          transition: 'transform 4s ease-in-out',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: `0 0 ${scale * 20}px rgba(191,162,219,0.2)`
        }}>
          <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>{stage}</span>
        </div>
      </div>

      <p style={{ opacity: 0.7, fontStyle: 'italic', marginBottom: '2rem' }}>
        Je suis là. Prends ton temps.
      </p>

      <button className="btn-emotion" onClick={onBack} style={{ justifyContent: 'center' }}>
        Je me sens mieux
      </button>
    </div>
  );
};

export default BreathingExercise;
