import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";

export default class NextQuestionButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <View style={[FlexStyles.flex, FlexStyles.justifyCenter]}>
        <Button onPress={this.props.onPress}
                title="New Question"
                color="orange"
                accessibilityLabel="Tap here to generate a new question" />
      </View>
    );
  }
}
