// Components/MainContent.js
import React from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import Certificate from './Certificate';

const MainContent = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Certificate/>
      <About />
      <Contact />
    </div>
  );
};

export default MainContent;
