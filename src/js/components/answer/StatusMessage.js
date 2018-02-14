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
    answer: PropTypes.string,
  }
  
  render () {
    let status_message = "";
    let message_styles = [TextStyles.size32, TextStyles.alignCenter];
    if (this.props.isSubmitted) {
      if (this.props.answerIsCorrect) {
        status_message = "Correct! Answer: " + this.props.answer;
        message_styles.push(TextStyles.green);
      } else {
        status_message = "Incorrect! Answer: " + this.props.answer;
        message_styles.push(TextStyles.red);
      }
    }

    return (
      <FlexView styles={[FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <Text style={message_styles}>{status_message}</Text>
      </FlexView>
    );
  }
}