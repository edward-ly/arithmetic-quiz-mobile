import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TextInput, TouchableOpacity } from "react-native";

import FlexView from "../layout/FlexView";

import ButtonStyles from "../../styles/ButtonStyles";
import FlexStyles from "../../styles/FlexStyles";
import InputStyles from "../../styles/InputStyles";

export default class AnswerForm extends Component {
  static propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }

  render () {
    return (
      <FlexView styles={[FlexStyles.justifyCenter]}>
        <FlexView styles={[FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
          <TextInput style={InputStyles.answerBox}
                     ref={this.props.inputRef}
                     underlineColorAndroid="transparent"
                     placeholder="Answer"
                     keyboardType="numeric"
                     onChangeText={this.props.onChangeText} />
          <TouchableOpacity style={ButtonStyles.submitButton}
                            onPress={this.props.onSubmit}>
            <Text style={ButtonStyles.submitButtonText}>
              Submit
            </Text>
         </TouchableOpacity>
        </FlexView>
      </FlexView>
    );
  }
}
