import React, { Component } from 'react';
import './App.css';
import Fretboard from "./Fretboard.js";

class App extends Component {
  render() {
    Fretboard.numStrings = 3;
    return (
      <div className="App">
        <div className="App-header">
          Chordally.com
        </div>
        <div>
          <Fretboard/>
        </div>
      </div>
    );
  }
}

export default App;
