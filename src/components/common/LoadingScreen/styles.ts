import { StyleSheet } from "react-native";
import { rh, rw } from "react-native-full-responsive";

export default StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    height: rh(100),
    width: rw(100),
    zIndex: 99999,
    justifyContent: "center",
    alignItems: "center",
  },
});