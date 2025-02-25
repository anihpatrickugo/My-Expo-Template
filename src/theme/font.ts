import { rScale } from "@/utils";

export const fontFamilies = {
  ClashDisplay: {
    Bold: "ClashDisplay-Bold",
    Regular: "ClashDisplay-Regular",
    SemiBold: "ClashDisplay-SemiBold",
  },
};

export const fontSizes = {
  maxHeader: rScale(24),
  header1: rScale(16),
  header2: rScale(14),
  p3: rScale(14),
  p2: rScale(12),
  p1: rScale(10),
};

export const style = {
  maxHeader: {
    fontSize: fontSizes.maxHeader,
    fontFamily: fontFamilies.ClashDisplay.Bold,
  },
  header1: {
    fontSize: fontSizes.header1,
    fontFamily: fontFamilies.ClashDisplay.Bold,
  },
  header2: {
    fontSize: fontSizes.header2,
    fontFamily: fontFamilies.ClashDisplay.Bold,
  },
  p3: {
    fontSize: fontSizes.p3,
    fontFamily: fontFamilies.ClashDisplay.Regular,
  },
  p2: {
    fontSize: fontSizes.p2,
    fontFamily: fontFamilies.ClashDisplay.Regular,
  },
  p1: {
    fontSize: fontSizes.p1,
    fontFamily: fontFamilies.ClashDisplay.Regular,
  },
};
