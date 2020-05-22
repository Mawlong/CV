import React from 'react';
import './App.css';

import Education from './components/education'
import Proficiency from './components/technicalProficiency'
import Internships from './components/internships'
import Responsibility from './components/posResponsibility'
import Projects from './components/projects'


import Navigation from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Education/>
      <Proficiency/>
      <Internships/>
      <Responsibility/>
      <Projects/>
      <Footer/>
    </div>

  );
}

export default App;
