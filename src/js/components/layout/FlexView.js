import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

export default class FlexView extends Component {
  static propTypes = {
    children: PropTypes.node,
    flex: PropTypes.number,
    styles: PropTypes.array, // array of style objects
  }

  render () {
    let flex = this.props.flex || 1;
    let styles = [];
    styles.push({ flex: flex });
    if (this.props.styles !== undefined) {
      styles.push(this.props.styles);
    }

    return <View style={styles}>
      { this.props.children }
    </View>;
  }
}
