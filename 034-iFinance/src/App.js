import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Form from './components/Form/Form';

import './App.scss';

function App() {
  const [ entry, setEntry ] = useState([]);
  const [ out, setOut ] = useState([]);
  const [ total, setTotal ] = useState(0);

  useEffect(() => {

    let entryAmount = calculateAmount(entry);
    let outAmount = calculateAmount(out);

    setTotal(() => {
      return entryAmount - outAmount;
    });
  }, [entry, out]);

  function calculateAmount(array) {
    let totalAmount = 0;

    if(array.length > 0) {
      for(let i of array) {
        totalAmount += i;
      }
    }

    return totalAmount;
  }

  function handleFormSubmit(event, formData) {
    event.preventDefault();

    for(let propriety in formData) {
      if(!formData[propriety]) {
        alert("Preencha todos os campos.");
        return;
      }
    }

    if(formData.type === "entry") {
      setEntry((prevEntry) => {
        return [...prevEntry, formData.value];
      });
    } else {
      setOut((prevOut) => {
        return [...prevOut, formData.value];
      });
    }

  }

  return (
    <div className="app">
      <Header />
      <Card title="entrada" amount={calculateAmount(entry)}/>
      <Card title="saida" amount={calculateAmount(out)}/>
      <Card title="total" amount={total}/>
      <Form handleFormSubmit={handleFormSubmit}/>
    </div>
  );
}

export default App;
