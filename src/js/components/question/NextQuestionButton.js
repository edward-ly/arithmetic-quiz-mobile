import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import FlexView from "../layout/FlexView";

import ButtonStyles from "../../styles/ButtonStyles";
import FlexStyles from "../../styles/FlexStyles";

export default class NextQuestionButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  render () {
    return (
      <FlexView styles={[FlexStyles.justifyCenter]}>
        <TouchableOpacity style={ButtonStyles.nextQuestionButton}
                          onPress={this.props.onPress}>
          <Text style={ButtonStyles.nextQuestionButtonText}>
            New Question
          </Text>
        </TouchableOpacity>
      </FlexView>
    );
  }
}
