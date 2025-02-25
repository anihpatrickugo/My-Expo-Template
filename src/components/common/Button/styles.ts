import { StyleSheet } from "react-native";
import { rs } from "react-native-full-responsive";

export default StyleSheet.create({
  button: {
    borderRadius: rs(4),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconLeft: {
    alignItems: "center",
    marginRight: 10,
  },
  iconRight: {
    alignItems: "center",
    marginLeft: 10,
  },
});
