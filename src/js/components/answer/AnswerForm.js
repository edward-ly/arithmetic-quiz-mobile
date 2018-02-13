import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class AnswerForm extends Component {
  static propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <View style={[FlexStyles.flex, FlexStyles.justifyCenter]}>
        <View style={[FlexStyles.flex, FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
          <TextInput style={[TextStyles.size32, TextStyles.alignCenter, styles.answerBox]}
                     ref={this.props.inputRef}
                     underlineColorAndroid="transparent"
                     placeholder="Answer"
                     keyboardType="numeric"
                     onChangeText={this.props.onChangeText} />
          <TouchableOpacity style={styles.submitButton}
                            onPress={this.props.onSubmit}>
            <Text style={styles.submitText}>
              Submit
            </Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answerBox: {
    flex: 1,
    borderColor: "#aaa",
    borderWidth: 2,
    padding: 4,
  },
  submitButton: {
    alignItems: "center",
    backgroundColor: "green",
    padding: 9,
    borderColor: "#aaa",
    borderWidth: 2,
  },
  submitText: {
    color: "white",
    fontSize: 23.5,
  },
});
