import { StyleSheet } from "react-native";
import { rs } from "react-native-full-responsive";

export default StyleSheet.create({
  container: {},
  thumb: {
    width: rs(16),
    height: rs(16),
    borderRadius: 100,
    position: "absolute",
  },
  background: {
    width: rs(48),
    height: rs(24),
    borderWidth: 1.4,
    borderRadius: 100,
    padding: 4,
  },
});
