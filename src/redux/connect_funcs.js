import React, {Component} from "react";
import { connect } from "react-redux";
import makeMove from "./actions";

class Move extends Component {
  // component implementation
}

const mapStateToProps = state => {
      return state.makeMoveReducer;
}

export default connect(mapStateToProps, {makeMove} )(Move);