import React, { Component } from 'react';
import { connect } from "react-redux"

import { spotClicked } from "../actions/stringActions"

import Strng from "./Strng.js";

// @ decorators aren't working, so see alternative export at end of file
//    npm eject would work, but not be nice
//    https://github.com/facebookincubator/create-react-app/issues/167
// The following @connect is from
//    https://github.com/learncodeacademy/react-js-tutorials/blob/master/5-redux-react/src/js/components/Layout.js
//@connect((store) => {
//  return {
//    user: store.user.user,
//    userFetched: store.user.fetched,
//    tweets: store.tweets.tweets,
//  };
//})


var _ = require('lodash');

class Fretboard extends Component {

  constructor(props) {
    super(props)
    console.log(this)
    var strings = []
    var i = 0;
    _.times(props.numStrings, function () {
      i++;
      strings.push({stringNum: i, numFrets: props.numFrets});
    });
  }

  render() {
    console.log(this.state);
    console.log(this.store);
    return (
      <div className="Fretboard" onClick={this.spotClicked}>
        HHHHHeeyyy
      </div>
    )
  }
}

// These 2 functions and the connect is explained here...
//http://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
const mapStateToProps = state => {
  return {
    numStrings : state.numStrings,
    numFrets: state.numFrets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    spotClicked : () => dispatch({
      type : 'spotClicked'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Fretboard)

//export default Fretboard;
//Because @connect decorator doesn't work...
// Works, but no...
//export default connect(state => ({numStrings: 16, numFrets: 15}))(Fretboard);
