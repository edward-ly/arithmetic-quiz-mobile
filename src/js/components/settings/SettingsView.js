import React, { Component } from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Toast from "react-native-root-toast";

import SettingsButton from "./SettingsButton";
import SettingsModal from "./SettingsModal";

import FlexStyles from "../../styles/FlexStyles";

export default class SettingsView extends Component {
  static propTypes = {
    saveDifficultySetting: PropTypes.func.isRequired,
    saveNotationSetting: PropTypes.func.isRequired,
    currentDifficulty: PropTypes.number.isRequired,
    currentNotation: PropTypes.string.isRequired,
  }
  
  constructor (props) {
    super(props);
    this.state = {
      showSettingsModal: false,
    };
    
    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
  }
  
  openSettingsModal () {
    this.setState({
      showSettingsModal: true,
    });
  }

  closeSettingsModal () {
    Toast.show("Settings saved! Any changes will be applied on the next question.");
    this.setState({
      showSettingsModal: false,
    });
  }
  
  render () {
    return (
      <View style={FlexStyles.flex}>
        <SettingsButton onPress={this.openSettingsModal} />
        <SettingsModal showModal={this.state.showSettingsModal}
                       closeModal={this.closeSettingsModal}
                       saveDifficultySetting={this.props.saveDifficultySetting}
                       saveNotationSetting={this.props.saveNotationSetting}
                       currentDifficulty={this.props.currentDifficulty}
                       currentNotation={this.props.currentNotation} />
      </View>
    );
  }
}
