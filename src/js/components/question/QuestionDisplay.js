import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class QuestionDisplay extends Component {
  static propTypes = {
    question: PropTypes.array.isRequired,
    hint: PropTypes.array.isRequired,
    showHint: PropTypes.bool.isRequired,
  }
  
  render () {
    const hint_colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    let { question, hint, showHint } = this.props;
    let question_display = question.map((item, i) => {
      let styles = [TextStyles.size32, TextStyles.alignCenter, TextStyles.margin6];
      if (showHint) {
        styles.push({ color: hint_colors[hint[i]], });
      };

      return <Text key={i} style={styles}>{item}</Text>;
    });

    return (
      <View style={[FlexStyles.flex, FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        { question_display }
      </View>
    );
  }
}