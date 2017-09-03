import React, { Component } from 'react';
var _ = require('lodash');

class Fretboard extends Component {
  render() {
    var numFrets = 5;
    var numStrings = 3;

    function Spot(props) {
      return <div className="Spot" key={props.num}>Bb{props.num}</div>;
    }

    function String(props) {
      var spots = [];
      var i = 0;
      _.times(numFrets, function () {
        i++;
        spots.push(Spot({num: i}));
      });
      return <div className="String" key={props.num}>{spots}</div>
    }

    var strings = [];
    var i = 0;
    _.times(numStrings, function () {
      i++;
      strings.push(String({num: i}));
    });
    return <div className="FretBoard">{strings}</div>;
  }
}

export default Fretboard;
