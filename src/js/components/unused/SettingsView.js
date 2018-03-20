import React, { Component } from "react";
import Toast from "react-native-root-toast";

import FlexView from "../layout/FlexView";
import SettingsButton from "./SettingsButton";
import SettingsModal from "./SettingsModal";

export default class SettingsView extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showSettingsModal: false,
    };

    this.openSettingsModal = this.openSettingsModal.bind(this);
    this.closeSettingsModal = this.closeSettingsModal.bind(this);
    this.closeSettingsModalWithoutSaving = this.closeSettingsModalWithoutSaving.bind(this);
  }

  openSettingsModal () {
    this.setState({
      showSettingsModal: true,
    });
  }

  closeSettingsModal (new_settings) {
    global.notation = new_settings.notation;
    global.number_of_operations = new_settings.number_of_operations;

    Toast.show("Settings saved! Any changes will be applied on the next question.");
    this.setState({
      showSettingsModal: false,
    });
  }

  closeSettingsModalWithoutSaving () {
    this.setState({
      showSettingsModal: false,
    });
  }

  render () {
    return (
      <FlexView>
        <SettingsButton onPress={this.openSettingsModal} />
        <SettingsModal showModal={this.state.showSettingsModal}
                       closeModal={this.closeSettingsModal}
                       closeModalWithoutSaving={this.closeSettingsModalWithoutSaving}
                       currentDifficulty={global.number_of_operations}
                       currentNotation={global.notation} />
      </FlexView>
    );
  }
}
