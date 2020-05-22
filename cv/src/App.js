import React from 'react';
import './App.css';

import Education from './components/education'
import Proficiency from './components/technicalProficiency'
import Internships from './components/internships'
import Responsibility from './components/posResponsibility'
import Projects from './components/projects'
import ExtraCurricular from './components/extraCurricular'
import Awards from './components/awards'



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
      <ExtraCurricular/>
      <Awards/>

      <div align="center">
        <p>(<b>NOTE</b>: Cognitia is NIT Meghalaya’s annual Technical Festival, Shishir is NIT Meghalaya’s annual Cultural Festival.)</p>
      </div>
      
      <Footer/>
    </div>

  );
}

export default App;
