import React, { Component } from "react";
import PropTypes from "prop-types";

import FlexView from "./FlexView";

export default class FlexSpace extends Component {
  static propTypes = {
    flex: PropTypes.number,
    styles: PropTypes.array, // array of style objects
  };

  render () {
    let { flex, styles } = this.props;
    return <FlexView flex={flex} styles={styles} />;
  }
}
