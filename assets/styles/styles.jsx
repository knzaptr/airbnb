import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
    flex: 1,
  },

  inputContainer: {
    gap: 13,
  },

  signin: {
    textAlign: "center",
    fontSize: 23,
    fontWeight: "bold",
    color: "#717171",
  },

  highlightText: {
    textAlign: "center",
    color: "#717171",
  },

  description: {
    height: 100,
    borderColor: "#EB5A62",
    borderWidth: 1,
    borderStyle: "solid",
  },

  showHidePassword: {
    position: "absolute",
    right: 0,
    bottom: 6,
  },

  passwordInput: {
    position: "relative",
  },

  btnDisabled: {
    borderColor: "#f7bdc0",
  },

  btnDisabledText: {
    color: "#f7bdc0",
  },

  contentContainerStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
