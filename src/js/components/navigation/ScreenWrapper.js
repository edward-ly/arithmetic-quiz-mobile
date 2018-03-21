import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";

import Header from "./Header";

import FlexView from "../layout/FlexView";

import ViewStyles from "../../styles/ViewStyles";

export default class ScreenWrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    onPress: PropTypes.func.isRequired,
  };

  render () {
    return (
      <FlexView>
        <View style={[ViewStyles.headerContainer]}>
          <Header onPress={this.props.onPress} />
        </View>
        <FlexView styles={[ViewStyles.mainPageContainer]}>{this.props.children}</FlexView>
      </FlexView>
    );
  }
}
