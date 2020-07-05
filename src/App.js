import React from 'react';
import './App.css';
import MapPicker from './Components/mappicker.component.js';
import Survey from './Components/survey.component.js';
import EmailComponent from './Components/email.component.js';

import ReactGA from 'react-ga';

function initializeAnalytics(){
  ReactGA.initialize("UA-171631832-1");
  ReactGA.pageview("/HomePage");
}

function App() {
  initializeAnalytics();
  return (
    <div className="App">
      <div>
        <h2 className="App-header">SCOPE PHA Immediate Resource Distribution Alpha</h2>
        
        <MapPicker />
        <br></br>
        <EmailComponent />

      </div>
      <div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h5 className="App-header">Developed by Arjun Verma</h5>
      </div>
    </div>
  );
}

export default App;
