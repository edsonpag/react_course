import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './components/Home';
import Callback from './components/Callback';
import NavbarComponent from './components/Navbar';
import TopTracks from './components/Spotify/TopTracks';
import TopArtists from './components/Spotify/TopArtists';

import apiRequestRefreshToken from './utils/apiRequestRefreshToken.js';


import './App.css';


function App() {

  const [ token, setToken ] = useState(function() {
    return localStorage.getItem("token") || null;
  });

  const [ refreshToken, setRefreshToken ] = useState(function() {
    return localStorage.getItem("refreshToken") || null;
  });

  const [ expiresIn, setExpiresIn ] = useState(function() {
    return localStorage.getItem("expiresIn") || null;
  });

  function updateToken(newToken) {
    localStorage.setItem("token", newToken);
    setToken(newToken);
  }

  function updateRefreshToken(newRefreshToken) {
    localStorage.setItem("refreshToken", newRefreshToken);
    setRefreshToken(newRefreshToken);
  }

  function updateExpiresIn(newExpiresIn) {
    const expiresDate = new Date(Date.now() + (newExpiresIn * 1000));
    localStorage.setItem("expiresIn", expiresDate);
    setExpiresIn(expiresDate);
  }

  function verifyIfTheTokenHasExpired() {
    const expireInDate = new Date(expiresIn);
    const dateNow = new Date();
    const delay = 600000; // 600000 = 10 minutos em milesegundos

    if(dateNow.getTime() >= expireInDate.getTime() - delay) {
      apiRequestRefreshToken(refreshToken)
      .then((response) => {
        updateToken(response.access_token);
        updateExpiresIn(response.expires_in);
      })
      .catch((error) => {
        console.log(error);
      })
    }

}

  return (
    <BrowserRouter>
      <NavbarComponent updateToken={updateToken} updateRefreshToken={updateRefreshToken} updateExpiresIn={updateExpiresIn} />
      <div className="app">
        <Routes>
            <Route element={<Home token={token} updateToken={updateToken} verifyIfTheTokenHasExpired={verifyIfTheTokenHasExpired} />} path="/" />
            <Route element={<Callback updateToken={updateToken} updateRefreshToken={updateRefreshToken} updateExpiresIn={updateExpiresIn} />} path="/callback" />
            <Route element={<TopTracks token={token} />} path="/toptracks" />
            <Route element={<TopArtists token={token} />} path="/topartists" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
