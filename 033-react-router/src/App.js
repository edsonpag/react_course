import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';
import Error from './routes/Error/Error';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/about" element={<About />}>
        <Route path="contact" element={<Contact />}></Route>
      </Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}

export default App;
