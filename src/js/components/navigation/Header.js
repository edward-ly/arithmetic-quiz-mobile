import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import FlexSpace from "../layout/FlexSpace";
import FlexView from "../layout/FlexView";

import FlexStyles from "../../styles/FlexStyles";

export default class Header extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  render () {
    return (
      <FlexView styles={[FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyBetween]}>
        <FlexSpace />
        <TouchableOpacity style={{ alignItems: "center", backgroundColor: "transparent", borderColor: "#666", borderWidth: 2, borderRadius: 4, width: 40, }}
                          onPress={this.props.onPress}>
          <Icon name="bars" size={32} color="black" />
        </TouchableOpacity>
      </FlexView>
    );
  }
}
