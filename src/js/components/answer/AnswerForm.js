import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, StyleSheet, TextInput, View } from "react-native";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";

export default class AnswerForm extends Component {
  static propTypes = {
    onChangeText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <View style={[FlexStyles.flex, FlexStyles.justifyCenter]}>
        <View style={[FlexStyles.flex, FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
          <TextInput style={[TextStyles.size32, TextStyles.alignCenter, styles.answerForm]}
                     underlineColorAndroid="transparent"
                     placeholder="Answer"
                     keyboardType="numeric"
                     onChangeText={this.props.onChangeText} />
          <Button onPress={this.props.onSubmit}
                  title="Submit"
                  color="green"
                  accessibilityLabel="Tap here to submit" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  answerForm: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
    borderColor: "gray",
    borderWidth: 2,
    padding: 4,
  },
});
