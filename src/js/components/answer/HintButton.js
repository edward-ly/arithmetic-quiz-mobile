import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";

export default class HintButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <View style={[FlexStyles.flex, FlexStyles.justifyCenter]}>
        <Button onPress={this.props.onPress}
                title="Hint"
                color="skyblue"
                accessibilityLabel="Tap here for a hint" />
      </View>
    );
  }
}
