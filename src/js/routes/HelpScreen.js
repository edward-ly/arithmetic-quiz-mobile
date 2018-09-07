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
    drawerLabel: "Help",
    drawerIcon: <Icon name="question-circle" size={24} />,
  };

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <ScreenWrapper onPress={() => this.props.navigation.navigate("DrawerToggle")}>
        <View style={ViewStyles.settingsContainer}>
          <Text>Hint: color-codes the question suggesting the order of operations needed to arrive at the correct answer.</Text>
        </View>
      </ScreenWrapper>
    );
  }
}
