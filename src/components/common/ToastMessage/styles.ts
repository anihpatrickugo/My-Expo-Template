import { StyleSheet } from "react-native";
import { rScale } from "@/utils";

export default StyleSheet.create({
  background: {
    position: "absolute",
    top: 0,
    paddingHorizontal: rScale(16),
    zIndex: 9999999999,
    width: "100%",
  },
  container: {
    borderRadius: 12,
    paddingVertical: rScale(16),
    paddingHorizontal: rScale(16),
  },
  dangerBox: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff44",
    borderRadius: 100,
  },
  closeBtnBox: {
    position: "absolute",
    right: rScale(10),
    width: "auto",
  },
  closeBtn: {
    paddingHorizontal: rScale(10),
    paddingVertical: rScale(16),
  },
});
