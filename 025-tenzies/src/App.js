import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

import './App.css';

import Header from './components/Header/Header';
import Dice from './components/Dice/Dice';
import Roll from './components/Roll/Roll';

function App() {

  const [ dice, setDice ] = useState(allNewDice());
  const [ tenzies, setTenzies ] = useState(false);
  const [ rolls, setRolls ] = useState(0);

  useEffect(() => {
    const value = dice[0].value;

    const gameStatus = dice.every((die) => {
      return die.isHeld === true && die.value === value;
    })

    setTenzies(gameStatus);
  }, [dice])


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
    setRolls((prevRolls) => {
      return prevRolls + 1;
    });

    setDice((prevDice) => {
      return prevDice.map((die) => {
        return die.isHeld ? die : { ...die, id: nanoid(), value: Math.ceil(Math.random() * 6) }
      })
    })
  }

  function newGame() {
    setTenzies(false);
    setDice(allNewDice());
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
        {tenzies && <Confetti />}
        <Header />
        <div className="dice-container">
          {diceElements}
        </div>
        <Roll rollDice={rollDice} newGame={newGame} tenzies={tenzies} rolls={rolls}/>
    </div>
  );
}

export default App;
