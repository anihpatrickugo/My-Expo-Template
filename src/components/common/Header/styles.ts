import { StyleSheet } from "react-native";
import { isIOS, rHeight } from "@/utils";

export default StyleSheet.create({
  header: {
    paddingTop: isIOS ? rHeight(9) : rHeight(5),
    paddingBottom: rHeight(3),
  },
});