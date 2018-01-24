import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class StatusMessage extends Component {
  static propTypes = {
    message: PropTypes.string,
  }
  
  render () {
    let message = this.props.message || "";
    return (
      <View style={[FlexStyles.flex, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <Text style={[TextStyles.size32, TextStyles.alignCenter]}>{message}</Text>
      </View>
    );
  }
}