import React, { Component } from "react";
import PropTypes from "prop-types";

import Header from "./Header";

import FlexView from "../layout/FlexView";

import ViewStyles from "../../styles/ViewStyles";

export default class ScreenWrapper extends Component {
  static propTypes = {
    flex: PropTypes.number,
    onPress: PropTypes.func.isRequired,
  }

  render () {
    return (
      <FlexView>
        <FlexView flex={this.props.flex}
                  styles={[ViewStyles.headerContainer]}>
          <Header onPress={this.props.onPress} />
        </FlexView>
        <FlexView flex={9} styles={[ViewStyles.mainPageContainer]}>
          { this.props.children }
        </FlexView>
      </FlexView>
    );
  }
}
