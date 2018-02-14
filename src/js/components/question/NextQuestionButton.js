import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

import FlexView from "../layout/FlexView";

import FlexStyles from "../../styles/FlexStyles";

export default class NextQuestionButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <FlexView styles={[FlexStyles.justifyCenter]}>
        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "orange", padding: 10, borderColor: "#ccc", borderWidth: 2, }}
                          onPress={this.props.onPress}>
          <Text style={{ color: "white", fontSize: 24, }}>
            New Question
          </Text>
        </TouchableOpacity>
      </FlexView>
    );
  }
}
