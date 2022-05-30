import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import Header from './components/Header/Header';
import Dice from './components/Dice/Dice';
import Roll from './components/Roll/Roll';

function App() {

  const [ dice, setDice ] = useState(allNewDice());

  function allNewDice() {
    const newDiceArr = [];

    for(let i = 0; i < 10; i++) {
      const newDie = {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      }

      newDiceArr.push(newDie);
    }

    return newDiceArr;
  }

  function rollDice() {
    setDice(allNewDice());
  }

  const diceElements = dice.map((die) => {
    return <Dice key={die.id} value={die.value}/>
  })

  return (
    <div className="app">
        <Header />
        <div className="dice-container">
          {diceElements}
        </div>
        <Roll rollDice={rollDice}/>
    </div>
  );
}

export default App;
