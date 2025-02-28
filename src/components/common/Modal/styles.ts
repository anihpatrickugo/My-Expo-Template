import { StyleSheet } from "react-native";
import { widthPercentageToDP as wd, heightPercentageToDP as hd } from "react-native-responsive-screen";
import { Theme } from "@/theme";

export default StyleSheet.create({
  background: {
    position: "absolute",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    zIndex: 99999,
    backgroundColor: "#00000088",
    paddingHorizontal: Theme.size.padding.medium,
  },
  container: {
    padding: Theme.size.padding.medium,
    borderRadius: Theme.size.radius.medium,
    zIndex: 999,
  },
  dismisser: {
    position: "absolute",
    height: hd("100%"),
    width: wd("100%"),
  },
});