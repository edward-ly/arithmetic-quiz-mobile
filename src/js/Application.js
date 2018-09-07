import { DrawerNavigator } from "react-navigation";

import MainScreen from "./routes/MainScreen";
import SettingsScreen from "./routes/SettingsScreen";
import HelpScreen from "./routes/HelpScreen";
import AboutScreen from "./routes/AboutScreen";

module.exports = DrawerNavigator({
  App: {
    screen: MainScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Help: {
    screen: HelpScreen,
  },
  About: {
    screen: AboutScreen,
  },
});
