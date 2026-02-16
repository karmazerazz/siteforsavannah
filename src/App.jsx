import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import ComfortDisplay from './components/ComfortDisplay';
import BreathingExercise from './components/BreathingExercise';

function App() {
  const [view, setView] = useState('intro');
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleStart = () => {
    setView('dashboard');
  };

  const handleSelectEmotion = (emotion) => {
    if (emotion === 'breathing') {
      setView('breathing');
    } else {
      setSelectedEmotion(emotion);
      setView('comfort');
    }
  };

  const handleBackToDashboard = () => {
    setSelectedEmotion(null);
    setView('dashboard');
  };

  return (
    <div className="App">
      {view === 'intro' && <WelcomeScreen onStart={handleStart} />}
      {view === 'dashboard' && <Dashboard onSelectEmotion={handleSelectEmotion} />}
      {view === 'comfort' && <ComfortDisplay emotion={selectedEmotion} onBack={handleBackToDashboard} />}
      {view === 'breathing' && <BreathingExercise onBack={handleBackToDashboard} />}
    </div>
  );
}

export default App;
