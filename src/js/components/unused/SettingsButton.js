import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "react-native";

import FlexSpace from "../layout/FlexSpace";
import FlexView from "../layout/FlexView";

import FlexStyles from "../../styles/FlexStyles";

export default class SettingsButton extends Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }
  
  render () {
    return (
      <FlexView styles={[FlexStyles.flexRow, FlexStyles.alignCenter, FlexStyles.justifyCenter]}>
        <FlexSpace flex={3} />
        <FlexView>
          <Button onPress={this.props.onPress}
                  title="Settings" />
        </FlexView>
      </FlexView>
    );
  }
}
