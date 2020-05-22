import React from 'react';
import './App.css';
import Education from './components/education'
import Proficiency from './components/technicalProficiency'


import Navigation from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Education/>
      <Proficiency/>
      <Footer/>
    </div>

  );
}

export default App;
