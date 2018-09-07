import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

// import FlexView from "../components/layout/FlexView";
import ScreenWrapper from "../components/navigation/ScreenWrapper";

// import FlexStyles from "../styles/FlexStyles";
// import TextStyles from "../styles/TextStyles";
import ViewStyles from "../styles/ViewStyles";

export default class SettingsScreen extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };

  static navigationOptions = {
    drawerLabel: "About",
    drawerIcon: <Icon name="info-circle" size={24} />,
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ScreenWrapper onPress={() => this.props.navigation.navigate("DrawerToggle")}>
        <View style={ViewStyles.settingsContainer}>
          <Text>(c) 2018, developed by Edward Ly.</Text>
          <Text>View the source code on GitHub:</Text>
        </View>
      </ScreenWrapper>
    );
  }
}
