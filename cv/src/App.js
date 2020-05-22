import React from 'react';
import './App.css';
import Education from './components/education'


import Navigation from './components/navbar';
import Footer from './components/footer';



// export async function getServerSideProps() {

//   const getEducation
// }

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Education/>
      <Footer/>
    </div>

  );
}

export default App;
