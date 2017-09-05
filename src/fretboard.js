import React, { Component } from 'react';
var _ = require('lodash');


class Spot extends Component {

  constructor(props) {
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
    var spotLocation = props.stringNum + "_" + props.fretNum;
    this.state = {
      label: spotLocation
    };
    console.log("Spot constructed" + this.state);
  };

  handleClicked(e) {
    console.log(this.props.fretNum);
    this.state = {
      label: "clicked"
    };
  };

  render() {
    return <div className="Spot" key={this.state.label} onClick={this.handleClicked}>{this.state.label}</div>;
  };
}


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


class Fretboard extends Component {

  constructor(props) {
    super(props);
    console.log("constructing fretboard");
    var numStrings = props.numStrings;
    var numFrets  = props.numFrets;

    var strings = [];
    var i = 0;
    _.times(numStrings, function () {
      i++;
      strings.push({stringNum: i, numFrets: numFrets});
    });

    this.state = {
      strings: strings
    };
  }

  render() {
    console.log(this.state);
    return (
      <div className="Fretboard">
        {this.state.strings.map(function(string){
          return <Strng key={string.stringNum} stringNum={string.stringNum} numFrets={string.numFrets}/>;
        })}
      </div>
    )
  }
}

export default Fretboard;
