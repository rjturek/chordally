import React, { Component } from 'react';
var _ = require('lodash');

class Spot extends Component {

  constructor(props) {
    super(props);
    //https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    this.handleClicked = this.handleClicked.bind(this);
    var spotLocation = props.stringNum + "_" + props.fretNum;

    var initialState = {
      label: spotLocation,
      classnames: "Spot"
    };
    console.log(initialState.spotClasses);
    this.state = initialState;
  };

  handleClicked(e) {
    //console.log(this.props.fretNum);
    console.log("before " + this.state.label + " " + this.state.spotClasses);
    var oldState = this.state;
    var newState = oldState;
    newState.label = "click";
    newState.classnames = "spotInChord";

    this.setState (newState);
    //console.log("after " + this.state.label + " " + this.state.spotClasses);

    //this.forceUpdate();
  };

  render() {
    return <div className={this.state.classnames} key={this.state.label} onClick={this.handleClicked}>{this.state.label}</div>;
  };
}

export default Spot;