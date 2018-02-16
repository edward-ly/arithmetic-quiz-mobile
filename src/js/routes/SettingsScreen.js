import React, { Component } from "react";
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
      Toast.show("Settings saved!");
    }
  }

  saveNotationValue (value, index) {
    if (global.notation !== value) {
      global.notation = value;
      Toast.show("Settings saved!");
      this.setState({
        currentNotation: value,
      });
    }
  }

  render () {
    const headerStyles = [TextStyles.size16, TextStyles.marginRight4, TextStyles.marginLeft4];
    const settingsItemStyles = { height: 36, };

    return (
      <ScreenWrapper onPress={() => this.props.navigation.navigate("DrawerToggle")}>
        <View style={ViewStyles.modalContainer}>
          <View style={settingsItemStyles}>
            <FlexView styles={[FlexStyles.flexRow, FlexStyles.justifyBetween]}>
              <Text style={headerStyles}>Difficulty</Text>
              <Text style={headerStyles}>{this.state.currentDifficulty}</Text>
            </FlexView>
          </View>
          <View style={settingsItemStyles}>
            <Slider minimumValue={2}
                    maximumValue={6}
                    step={1}
                    value={global.number_of_operations}
                    onValueChange={this.updateDifficultyValue}
                    onSlidingComplete={this.saveDifficultyValue} />
          </View>
          <View style={settingsItemStyles}>
            <Text style={headerStyles}>Notation</Text>
          </View>
          <View style={settingsItemStyles}>
            <Picker onValueChange={this.saveNotationValue}
                    mode="dropdown"
                    selectedValue={this.state.currentNotation}>
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