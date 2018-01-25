import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class StatusMessage extends Component {
  static propTypes = {
    message: PropTypes.string,
    textStyles: PropTypes.array,
  }
  
  render () {
    let message = this.props.message || "";
    let styles = this.props.textStyles || [];
    let text_styles = [TextStyles.size32, TextStyles.alignCenter];
    text_styles.push(styles);

    return (
      <View style={[FlexStyles.flex, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <Text style={text_styles}>{message}</Text>
      </View>
    );
  }
}