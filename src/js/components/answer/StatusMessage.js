import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";

import FlexView from "../layout/FlexView";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class StatusMessage extends Component {
  static propTypes = {
    isSubmitted: PropTypes.bool.isRequired,
    answerIsCorrect: PropTypes.bool.isRequired,
    showAnswer: PropTypes.bool,
    answer: PropTypes.string,
  }

  render () {
    let status_message = "";
    let message_styles = [TextStyles.statusMessage];
    if (this.props.isSubmitted) {
      if (this.props.answerIsCorrect) {
        status_message += "Correct!";
        message_styles.push({ color: "green" });
      } else {
        status_message += "Incorrect!";
        message_styles.push({ color: "red" });
      }
      if (this.props.showAnswer) {
        status_message += " Answer: " + this.props.answer;
      }
    }

    return (
      <FlexView styles={[FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <Text style={message_styles}>{status_message}</Text>
      </FlexView>
    );
  }
}
