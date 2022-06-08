import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

import './App.css';

import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import BackToTopBtn from './components/BackToTopBtn/BackToTopBtn';

function App() {


  useEffect(() => {
    const sr = ScrollReveal({
      reset: true,
      origin: "top",
      distance: "30px"
    })

    sr.reveal(`
      .navbar-container,
      .main,
      .projects-container *:not(svg, path),
      .footer *:not(svg, path, .form-label, .form-label-top)
    `);
  }, []);


  return (
    <div className="app">
      <Navbar />
      <Main />
      <Projects />
      <Footer />
      <BackToTopBtn />
    </div>
  );
}

export default App;
