import React, { Component } from 'react';
import Spot from "./Spot.js";

var _ = require('lodash');

class Strng extends Component {
  constructor(props) {
    super(props);
    var stringNum = props.stringNum;
    var numFrets  = props.numFrets;
    var spots = [];
    var i = 0;
    _.times(numFrets, function () {
      var spot = {stringNum: stringNum, fretNum: i};
      spots.push(spot);
      i++;
    });
    this.state = {
      stringNum: props.stringNum,
      spots: spots
    };
    console.log("String constructed" + this.state);
  };

  render() {
    return (
      <div className="String" key={this.state.stringNum}>
        {this.state.spots.map(function(spot){
          return <Spot key={spot.stringNum + spot.fretNum} stringNum={spot.stringNum} fretNum={spot.fretNum}/>;
        })}
      </div>
    )
  }
}

export default Strng;