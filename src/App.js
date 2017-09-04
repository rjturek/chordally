import React, { Component } from 'react';
import './App.css';
import Fretboard from "./Fretboard.js";
import Heading from './Heading.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Chordally.com
        </div>
        <div>
          <Heading/>
        </div>
        <div>
          <Fretboard numStrings="6" numFrets="15" />
        </div>
      </div>
    );
  }
}

export default App;
