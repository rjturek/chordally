import React, { Component } from 'react';

var _ = require('lodash');

class Fretboard extends Component {
  render() {
    var numStrings = 3;

    function String(props) {
      return <h1 key={props.num}>This is string number {props.num}</h1>;
    }

    var strings = [];

    console.log("Num Strings " + numStrings);

    var i = 0;
    _.times(numStrings, function() {
      i++;
      strings.push(String({num: i}));
    });

    return <div>{strings}</div>;
  }
}

export default Fretboard;
