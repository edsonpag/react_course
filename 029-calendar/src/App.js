import React, { useState } from 'react';

import Header from './components/Header/Header';
import Calendar from './components/Calendar/Calendar';

import './App.css';

function App() {
  const [ date, setDate ] = useState(new Date);

  const [ months ] = useState(
    ["January", "February", "March", "April", "May",
     "June", "July", "August", "September", "October",
     "November", "December"]);

  function prevMonth() {
    setDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth());
      newDate.setMonth(prevDate.getMonth() - 1);

      return newDate;
    });
  }

  function nextMonth() {
    setDate((prevDate) => {
      const newDate = new Date(prevDate.getFullYear(), prevDate.getMonth());
      newDate.setMonth(prevDate.getMonth() + 1);

      return newDate;
    });
  }

  return (
    <div className="app">
      <Header date={date} months={months} prevMonth={prevMonth} nextMonth={nextMonth}/>
      <Calendar date={date} />
    </div>
  );
}

export default App;
