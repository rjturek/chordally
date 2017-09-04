import React, { Component } from 'react';
var _ = require('lodash');


class Spot extends Component {

  constructor(props) {
    super(props);
    var spotLocation = props.stringNum + "_" + props.fretNum;
    this.state = {
      label: spotLocation
    };
    console.log("Spot constructed" + this.state);
  };

  handleClicked(e) {
    alert("clicked");
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
      i++;
      var spot = {stringNum: stringNum, fretNum: i};
      spots.push(spot);
    });
    this.state = {
      spots: spots
    };
    console.log("String constructed" + this.state);
  };

  render() {
    return (
      <ul>
        {this.state.spots.map(function(spotProps){
          return <Spot key={spotProps}/>;
        })}
      </ul>
    )
    //return <div className="String" key={this.state.stringNum}>string {this.state.stringNum} numfrets {this.state.numFrets}</div>
  }
}


class Fretboard extends Component {
  //
  //constructor(props) {
  //  super(props);
  //  console.log("constructing fretboard");
  //  var numFrets = 5;
  //  var numStrings = 3;
  //
  //  var strings = [];
  //  var i = 0;
  //  _.times(numStrings, function () {
  //    i++;
  //    var string = new Strng({stringNum: i, numFrets: numFrets})
  //    strings.push(string);
  //  });
  //  this.state = {
  //    strings: strings
  //  };
  //}

  render() {
    console.log(this.state);
    return (
      <div className="FretBoard">
        <Strng stringNum={1} numFrets={5}/>
        <Strng stringNum={2} numFrets={5}/>
        <Strng stringNum={3} numFrets={5}/>
      </div>
    )
  }
}

export default Fretboard;
