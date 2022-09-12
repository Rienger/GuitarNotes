
import './App.css';
import Guitar from './Guitar';
import React from 'react'

function App() {

  const restart = () => {
    
  }

  

  return (
    <div className="App">
    <h1>This is for me to take notes of chords that i don't know</h1>
   
    <div className='final-guitar'>

    <Guitar />
    {/* <Guitar/>
    <Guitar/> */}
    </div>

    <button onClick={restart}>RESTART</button>
    
    
    

    </div>
  );
}

export default App;
