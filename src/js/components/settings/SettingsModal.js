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
    closeModalWithoutSaving: PropTypes.func.isRequired,
    currentDifficulty: PropTypes.number.isRequired,
    currentNotation: PropTypes.string.isRequired,
  }

  constructor (props) {
    super(props);
    this.state = {
      currentDifficulty: this.props.currentDifficulty,
      currentNotation: this.props.currentNotation,
    };
    
    this.updateDifficultyValue = this.updateDifficultyValue.bind(this);
    this.updateNotationValue = this.updateNotationValue.bind(this);
    this.closeWithoutSaving = this.closeWithoutSaving.bind(this);
    this.saveAndClose = this.saveAndClose.bind(this);
  }

  updateDifficultyValue (value) {
    this.setState({
      currentDifficulty: value,
    });
  }

  updateNotationValue (value, index) {
    this.setState({
      currentNotation: value,
    });
  }

  closeWithoutSaving () {
    this.props.closeModalWithoutSaving();
    this.setState({
      currentDifficulty: this.props.currentDifficulty,
      currentNotation: this.props.currentNotation,
    });
    this._difficultySlider.setNativeProps({ value: this.props.currentDifficulty });
  }

  saveAndClose () {
    this.props.closeModal({
      number_of_operations: this.state.currentDifficulty,
      notation: this.state.currentNotation,
    });
  }

  render () {
    const difficultyHeaderStyles = [TextStyles.size16, TextStyles.marginRight4, TextStyles.marginLeft4];
    const notationHeaderStyles = [TextStyles.size16, TextStyles.marginTop16, TextStyles.marginRight4, TextStyles.marginLeft4];

    return (
      <Modal isVisible={this.props.showModal}
             onBackdropPress={this.closeWithoutSaving}
             onRequestClose={this.closeWithoutSaving}>
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
                    ref={component => this._difficultySlider = component}
                    value={this.props.currentDifficulty}
                    onValueChange={this.updateDifficultyValue}
                    onSlidingComplete={this.updateDifficultyValue} />
            <Text style={notationHeaderStyles}>Notation</Text>
            <Picker onValueChange={this.updateNotationValue}
                    mode="dropdown"
                    selectedValue={this.state.currentNotation}>
              <Picker.Item label="Prefix (Polish)" value="PREFIX" />
              <Picker.Item label="Infix" value="INFIX" />
              <Picker.Item label="Postfix (Reverse Polish)" value="POSTFIX" />
            </Picker>
            <Button onPress={this.saveAndClose}
                    title="Save" />
          </View>
          <FlexSpace />
        </View>
      </Modal>
    );
  }
}
