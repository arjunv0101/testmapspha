import React from 'react';
import './App.css';
import MapPicker from './Components/mappicker.component.js';
import Survey from './Components/survey.component.js';
import EmailComponent from './Components/email.component.js';

function App() {

  return (
    <div className="App">
      <h2 className="App-header">SCOPE PHA Immediate Resource Distribution Alpha</h2>
      
      <MapPicker />
      <br></br>
      <EmailComponent />

      <h6 className="App-header">Developed by Arjun Verma</h6>

    </div>
  );
}

export default App;
