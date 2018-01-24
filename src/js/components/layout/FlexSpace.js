import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default class FlexSpace extends Component {
  static propTypes = {
    flex: PropTypes.number,
  }
  
  render () {
    let flex = this.props.flex || 1;
    return <View style={{ flex: flex }} />;
  }
}