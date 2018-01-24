import { StyleSheet } from "react-native";

export default FlexStyles = StyleSheet.create({
  // declare flex box
  flex: {
    flex: 1,
  },
  // flex-direction
  flexRow: {
    flexDirection: "row",
  },
  // align-items
  alignStart: {
    alignItems: "flex-start",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignEnd: {
    alignItems: "flex-end",
  },
  alignStretch: {
    alignItems: "stretch",
  },
  // justify-content
  justifyStart: {
    justifyContent: "flex-start",
  },
  justifyCenter: {
    justifyContent: "center",
  },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  justifyAround: {
    justifyContent: "space-around",
  },
  justifyBetween: {
    justifyContent: "space-between",
  },
});