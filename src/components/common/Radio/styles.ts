import { StyleSheet } from "react-native";
import { rh, rs } from "react-native-full-responsive";

export default StyleSheet.create({
  container: {
    paddingVertical: rh(2),
  },
  box: {
    width: rs(20),
    height: rs(20),
    borderRadius: 100,
    borderWidth: 1.6,
    justifyContent: "center",
    alignItems: "center",
  },
  innerBox: {
    width: rs(12),
    height: rs(12),
    borderRadius: 100,
  },
});