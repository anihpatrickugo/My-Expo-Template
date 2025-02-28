import { StyleSheet } from "react-native";
import { rh, rw } from "react-native-full-responsive";

export default StyleSheet.create({
  container: {
    position: "absolute",
    height: rh(100),
    width: rw(100),
    top: 0,
    left: 0,
    zIndex: 99999999,
  },
});