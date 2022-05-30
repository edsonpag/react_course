import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import './App.css';

import Header from './components/Header/Header';
import Dice from './components/Dice/Dice';
import Roll from './components/Roll/Roll';

function App() {

  const [ dice, setDice ] = useState(allNewDice());

  function allNewDice() {
    const diceArray = [];

    for(let i = 0; i < 10; i++) {
      const newDie = {
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeld: false
      }

      diceArray.push(newDie);
    }

    return diceArray;
  }

  function rollDice() {
    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld ? die : { ...die, id: nanoid(), value: Math.ceil(Math.random() * 6) }
      })
    })
  }

  function holdDice(id) {
    setDice((prevDice) => {

      return prevDice.map((die) => {
        if(die.id === id) {
          die.isHeld = !die.isHeld;
        }

        return die;
      })

    });
  }

  const diceElements = dice.map((die) => {
    return <Dice
    key={die.id}
    id={die.id}
    value={die.value}
    isHeld={die.isHeld}
    holdDice={holdDice}/>
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
