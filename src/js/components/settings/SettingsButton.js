import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, View } from "react-native";

import FlexSpace from "../layout/FlexSpace";

import FlexStyles from "../../styles/FlexStyles";

export default class SettingsButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <View style={[FlexStyles.flex, FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <FlexSpace flex={3} />
        <View style={FlexStyles.flex}>
          <Button onPress={this.props.onPress}
                  title="Settings" />
        </View>
      </View>
    );
  }
}
