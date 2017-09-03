import React, { Component } from 'react';
var _ = require('lodash');

class Fretboard extends Component {
  render() {
    var numStrings = 3;
    function String(props) {
      return <div className="Spot" key={props.num}>ally{props.num}</div>;
    }

    var strings = [];

    console.log("Num Strings " + numStrings);

    var i = 0;
    _.times(numStrings, function () {
      i++;
      strings.push(String({num: i}));
    });
    return <div className="FretGrid">{strings}</div>;
  }
}

export default Fretboard;
