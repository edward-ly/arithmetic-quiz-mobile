import React, { Component } from "react";
import PropTypes from "prop-types";
import { Dimensions, Picker, Slider, Text, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";

import FlexSpace from "../layout/FlexSpace";
import FlexView from "../layout/FlexView";

import FlexStyles from "../../styles/FlexStyles";
import TextStyles from "../../styles/TextStyles";
import ViewStyles from "../../styles/ViewStyles";

import Platform from "../../utilities/Platform";

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
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
    };
    
    this.updateDifficultyValue = this.updateDifficultyValue.bind(this);
    this.updateNotationValue = this.updateNotationValue.bind(this);
    this.closeWithoutSaving = this.closeWithoutSaving.bind(this);
    this.saveAndClose = this.saveAndClose.bind(this);
    Dimensions.addEventListener("change", this._orientationDidChange.bind(this));
  }

  _orientationDidChange () {
    this.setState({
      orientation: Platform.isPortrait() ? "PORTRAIT" : "LANDSCAPE",
    });
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
    const headerStyles = [TextStyles.size16, TextStyles.marginRight4, TextStyles.marginLeft4];

    return (
      <Modal isVisible={this.props.showModal}
             onBackdropPress={this.closeWithoutSaving}
             onRequestClose={this.closeWithoutSaving}>
        <FlexView>
          { this.state.orientation === "PORTRAIT" ? <FlexSpace /> : null }
          <FlexView styles={[ViewStyles.modalContainer]}>
            <FlexView>
              <FlexView styles={[FlexStyles.flexRow, FlexStyles.justifyBetween]}>
                <Text style={headerStyles}>Difficulty</Text>
                <Text style={headerStyles}>{this.state.currentDifficulty}</Text>
              </FlexView>
            </FlexView>
            <FlexView>
              <Slider minimumValue={2}
                      maximumValue={6}
                      step={1}
                      ref={component => this._difficultySlider = component}
                      value={this.props.currentDifficulty}
                      onValueChange={this.updateDifficultyValue}
                      onSlidingComplete={this.updateDifficultyValue} />
            </FlexView>
            <FlexView>
              <Text style={headerStyles}>Notation</Text>
            </FlexView>
            <FlexView>
              <Picker onValueChange={this.updateNotationValue}
                      mode="dropdown"
                      selectedValue={this.state.currentNotation}>
                <Picker.Item label="Prefix (Polish)" value="PREFIX" />
                <Picker.Item label="Infix" value="INFIX" />
                <Picker.Item label="Postfix (Reverse Polish)" value="POSTFIX" />
              </Picker>
            </FlexView>
            <FlexView>
              <TouchableOpacity style={{ alignItems: "center", backgroundColor: "blue", padding: 6, borderColor: "#ccc", borderWidth: 2, }}
                                onPress={this.saveAndClose}>
                <Text style={{ color: "white", fontSize: 16, fontWeight: "bold", }}>
                  SAVE
                </Text>
              </TouchableOpacity>
            </FlexView>
          </FlexView>
          { this.state.orientation === "PORTRAIT" ? <FlexSpace /> : null }
        </FlexView>
      </Modal>
    );
  }
}
