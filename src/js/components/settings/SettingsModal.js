import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Picker, Slider, Text, View } from "react-native";
import Modal from "react-native-modal";

import FlexSpace from "../layout/FlexSpace";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";
import ViewStyles from "../../styles/ViewStyles";

export default class SettingsModal extends Component {
  static propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    saveDifficultySetting: PropTypes.func.isRequired,
    saveNotationSetting: PropTypes.func.isRequired,
    currentDifficulty: PropTypes.number.isRequired,
    currentNotation: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props);
    this.state = {
      currentDifficulty: this.props.currentDifficulty,
    };
    
    this.showDifficultyValue = this.showDifficultyValue.bind(this);
  }

  showDifficultyValue (value) {
    this.setState({
      currentDifficulty: value,
    });
  }

  render () {
    const difficultyHeaderStyles = [TextStyles.size16, TextStyles.marginRight4, TextStyles.marginLeft4];
    const notationHeaderStyles = [TextStyles.size16, TextStyles.marginTop16, TextStyles.marginRight4, TextStyles.marginLeft4];

    return (
      <Modal isVisible={this.props.showModal}
             onBackdropPress={this.props.closeModal}
             onRequestClose={this.props.closeModal}>
        <View style={FlexStyles.flex}>
          <FlexSpace />
          <View style={ViewStyles.modalContainer}>
            <View style={[FlexStyles.flex, FlexStyles.flexRow, FlexStyles.justifyBetween]}>
              <Text style={difficultyHeaderStyles}>Difficulty</Text>
              <Text style={difficultyHeaderStyles}>{this.state.currentDifficulty}</Text>
            </View>
            <Slider minimumValue={2}
                    maximumValue={6}
                    step={1}
                    value={this.props.currentDifficulty}
                    onValueChange={this.showDifficultyValue}
                    onSlidingComplete={this.props.saveDifficultySetting} />
            <Text style={notationHeaderStyles}>Notation</Text>
            <Picker onValueChange={this.props.saveNotationSetting}
                    mode="dropdown"
                    selectedValue={this.props.currentNotation}>
              <Picker.Item label="Prefix (Polish)" value="PREFIX" />
              <Picker.Item label="Infix" value="INFIX" />
              <Picker.Item label="Postfix (Reverse Polish)" value="POSTFIX" />
            </Picker>
            <Button onPress={this.props.closeModal}
                    title="Save" />
          </View>
          <FlexSpace />
        </View>
      </Modal>
    );
  }
}
