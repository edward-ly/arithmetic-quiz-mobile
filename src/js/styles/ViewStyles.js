import { StyleSheet } from "react-native";

export default ViewStyles = StyleSheet.create({
  // All Screens
  headerContainer: {
    height: 80,
    backgroundColor: "#ddd",
    borderBottomColor: "#111",
    borderBottomWidth: 2,
    paddingTop: 24,
    paddingRight: 12,
    paddingLeft: 12,
  },
  mainPageContainer: {
    backgroundColor: "#fff",
    paddingRight: 12,
    paddingBottom: 12,
    paddingLeft: 12,
  },
  // Settings Modal
  modalContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
  },
  // Settings Screen
  settingsContainer: {
    backgroundColor: "#fff",
    paddingTop: 12,
  },
  settingsItemHeader: {
    fontSize: 16,
    marginRight: 6,
    marginLeft: 6,
  },
  settingsItem: {
    height: 36,
  },
});
