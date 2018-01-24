import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class QuestionDisplay extends Component {
  static propTypes = {
    question: PropTypes.string,
  }
  
  render () {
    let question = this.props.question || "";
    return (
      <View style={[FlexStyles.flex, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <Text style={[TextStyles.size32, TextStyles.alignCenter]}>{question}</Text>
      </View>
    );
  }
}