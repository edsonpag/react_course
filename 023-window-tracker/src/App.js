import { useState } from 'react';
import './App.css';

import WindowTracker from './components/WindowTracker';

function App() {

  const [ showWindowTracker, setShowWindowTracker ] = useState(true);

  function toggleWindowTracker() {
    setShowWindowTracker(prevWindowTracker => {
      return !prevWindowTracker;
    });
  }

  return (
    <div className="App">
      <button onClick={toggleWindowTracker}>Toggle Window Tracker</button>
      {showWindowTracker && <WindowTracker />}
    </div>
  );
}

export default App;
