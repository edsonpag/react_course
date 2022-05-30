import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

import './App.css';

import Header from './components/Header/Header';
import Dice from './components/Dice/Dice';
import Roll from './components/Roll/Roll';
import Chart from './components/Chart/Chart';

function App() {

  const [ dice, setDice ] = useState(allNewDice());
  const [ tenzies, setTenzies ] = useState(false);
  const [ rolls, setRolls ] = useState(0);
  const [ isStarted, setIsStarted ] = useState(false);

  const [ timer, setTimer ] = useState({});
  const [ bestTime, setBestTime ] = useState(() => {
    return JSON.parse(localStorage.getItem("bestTime")) || {};
  });
  const [ intervalId, setIntervalId ] = useState("");

  function startTimer() { 
    const id = setInterval(() => {
      setTimer(prevTimer => {
        const newTimer = {
          timerCounter: prevTimer.timerCounter || 0,
          hours: prevTimer.hours || 0,
          minutes: prevTimer.minutes || 0,
          seconds: prevTimer.seconds || 0
        }


        newTimer.timerCounter = newTimer.timerCounter + 1;
        newTimer.hours = Math.floor(newTimer.timerCounter / 60 / 60);
        newTimer.minutes = Math.floor(newTimer.timerCounter / 60 % 60);
        newTimer.seconds = newTimer.timerCounter % 60;
      

        return newTimer;
      });
    }, 1000);

    setIntervalId(id);
  }

  function saveToLocalStorage() {
    localStorage.setItem("bestTime", JSON.stringify(timer));
  }

  useEffect(() => {
    const value = dice[0].value;

    const gameStatus = dice.every((die) => {
      return die.isHeld === true && die.value === value;
    })

    if(gameStatus) {
      setIsStarted(false);

      const localStorageBestTime = JSON.parse(localStorage.getItem("bestTime"));

      if(localStorageBestTime === null) {
        saveToLocalStorage();
      } else {
        localStorageBestTime.timerCounter > timer.timerCounter 
        && saveToLocalStorage();
      }

      setBestTime(JSON.parse(localStorage.getItem("bestTime")));

      if(intervalId !== "") {
        clearInterval(intervalId);
      }
    }

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

  function startGame() {
    setTenzies(false);
    setRolls(0);
    setTimer({});
    setDice(allNewDice());
    setIsStarted(true);
    startTimer();
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
    <>
      <div className="confetti-container">
        {tenzies && <Confetti />}
      </div>

      <div className="app">
          <Chart bestTime={bestTime}/>
          <div className="timer">
            {timer.hours > 0 && <span className="hours">{timer.hours}h</span>}
            {timer.minutes > 0 && <span className="minutes">{timer.minutes}m</span>}
            {timer.seconds >= 0 && <span className="seconds">{timer.seconds}s</span>}
          </div>  
          <Header />

          {isStarted 
          ?
          <>
            <div className="dice-container">
              {diceElements}
            </div>
            <Roll rollDice={rollDice} rolls={rolls}/>
          </>
          :
          <button className="start-game" onClick={startGame}>Start Game</button>
          }
      </div>
    </>
  );
}

export default App;
