import React, { Component } from 'react';
import { connect } from "react-redux"
import './../App.css';
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
          <Fretboard />
        </div>
      </div>
    );
  }
}

//export default App;
export default connect(state => ({numStrings: 4, numFrets: 15}))(App);