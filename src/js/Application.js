import { DrawerNavigator } from "react-navigation";

import MainScreen from "./routes/MainScreen";
import SettingsScreen from "./routes/SettingsScreen";

export default Application = DrawerNavigator({
  App: {
    screen: MainScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
});
