import './App.css';

import Header from './components/Header/Header';
import Dice from './components/Dice/Dice';
import Roll from './components/Roll/Roll';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="dice-container">
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
          <Dice />
        </div>
        <Roll />
    </div>
  );
}

export default App;
