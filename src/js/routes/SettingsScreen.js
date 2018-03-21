import React, { Component } from "react";
import PropTypes from "prop-types";
import { Picker, Slider, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Toast from "react-native-root-toast";

// import FlexSpace from "../layout/FlexSpace";
import FlexView from "../components/layout/FlexView";
import ScreenWrapper from "../components/navigation/ScreenWrapper";

import FlexStyles from "../styles/FlexStyles";
import TextStyles from "../styles/TextStyles";
import ViewStyles from "../styles/ViewStyles";

export default class SettingsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    drawerLabel: "Settings",
    drawerIcon: <Icon name="gear" size={24} />,
  };

  constructor (props) {
    super(props);
    this.state = {
      currentDifficulty: global.number_of_operations,
      currentNotation: global.notation,
    };

    this.updateDifficultyValue = this.updateDifficultyValue.bind(this);
    this.saveDifficultyValue = this.saveDifficultyValue.bind(this);
    this.saveNotationValue = this.saveNotationValue.bind(this);
  }

  updateDifficultyValue (value) {
    this.setState({
      currentDifficulty: value,
    });
  }

  saveDifficultyValue (value) {
    if (global.number_of_operations !== value) {
      global.number_of_operations = value;
      this.showToastSuccess();
    }
  }

  saveNotationValue (value) {
    if (global.notation !== value) {
      global.notation = value;
      this.showToastSuccess();
      this.setState({
        currentNotation: value,
      });
    }
  }

  showToastSuccess () {
    Toast.show("Settings saved! Changes will be applied on the next question.");
  }

  render () {
    return (
      <ScreenWrapper onPress={() => this.props.navigation.navigate("DrawerToggle")}>
        <View style={ViewStyles.settingsContainer}>
          <View style={ViewStyles.settingsItem}>
            <FlexView styles={[FlexStyles.flexRow, FlexStyles.justifyBetween]}>
              <Text style={TextStyles.settingsItemHeader}>Difficulty</Text>
              <Text style={TextStyles.settingsItemHeader}>{this.state.currentDifficulty}</Text>
            </FlexView>
          </View>
          <View style={ViewStyles.settingsItem}>
            <Slider
              minimumValue={2}
              maximumValue={6}
              step={1}
              value={global.number_of_operations}
              onValueChange={this.updateDifficultyValue}
              onSlidingComplete={this.saveDifficultyValue}
            />
          </View>
          <View style={ViewStyles.settingsItem}>
            <Text style={TextStyles.settingsItemHeader}>Notation</Text>
          </View>
          <View style={ViewStyles.settingsItem}>
            <Picker
              onValueChange={this.saveNotationValue}
              mode="dropdown"
              selectedValue={this.state.currentNotation}
            >
              <Picker.Item label="Prefix (Polish)" value="PREFIX" />
              <Picker.Item label="Infix" value="INFIX" />
              <Picker.Item label="Postfix (Reverse Polish)" value="POSTFIX" />
            </Picker>
          </View>
        </View>
      </ScreenWrapper>
    );
  }
}
