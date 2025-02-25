import * as React from "react";
import { ColorValue, DimensionValue, View, ViewProps, ViewStyle } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { rs } from "react-native-full-responsive";
import { useTheme } from "@/hooks/useTheme";
import { Theme } from "@/theme";

export interface BoxProps extends ViewProps {
  children?: any;
  vAlign?: "top" | "middle" | "bottom";
  hAlign?: "left" | "center" | "right";
  justify?: "space-between" | "space-around" | "space-evenly";
  flex?: boolean | number;
  bgColor?: ColorValue;
  width?: DimensionValue;
  height?: DimensionValue;
  useSafeArea?: boolean;
  boxed?: boolean;
  row?: boolean;
  topBorder?: boolean | number;
  bottomBorder?: boolean | number;
  leftBorder?: boolean | number;
  rightBorder?: boolean | number;
  padded?: boolean;
  borderColor?: ColorValue;
  copilot?: any;
}

const Box: React.FC<BoxProps> = (props) => {
  const { colors } = useTheme();

  let boxStyles: ViewStyle = {
    backgroundColor: props.bgColor || "transparent",
    width: props.width || "100%",
    height: props.height || "auto",
    flexDirection: props.row ? "row" : "column",
    borderTopWidth: props.topBorder ? (props.topBorder === true ? 1.4 : props.topBorder) : undefined,
    borderBottomWidth: props.bottomBorder ? (props.bottomBorder === true ? 1.4 : props.bottomBorder) : undefined,
    borderLeftWidth: props.leftBorder ? (props.leftBorder === true ? 1.4 : props.leftBorder) : undefined,
    borderRightWidth: props.rightBorder ? (props.rightBorder === true ? 1.4 : props.rightBorder) : undefined,
    paddingHorizontal: props.padded ? rs(16) : undefined,
    borderBottomColor: props.borderColor ?? colors.black,
    borderTopColor: props.borderColor ?? colors.black,
    borderLeftColor: props.borderColor ?? colors.black,
    borderRightColor: props.borderColor ?? colors.black,
  };

  if (props.justify) {
    boxStyles.justifyContent = props.justify;
  }
  if (props.flex) {
    boxStyles.flex = props.flex === true ? 1 : props.flex;
  }

  switch (props.vAlign) {
    case "top":
      boxStyles.alignItems = "flex-start";
      break;
    case "middle":
      boxStyles[props.row ? "alignItems" : "justifyContent"] = "center";
      break;
    case "bottom":
      boxStyles[props.row ? "alignItems" : "justifyContent"] = "flex-end";
      break;
  }

  switch (props.hAlign) {
    case "left":
      boxStyles[props.row ? "justifyContent" : "alignItems"] = "flex-start";
      break;
    case "center":
      boxStyles[props.row ? "justifyContent" : "alignItems"] = "center";
      break;
    case "right":
      boxStyles[props.row ? "justifyContent" : "alignItems"] = "flex-end";
      break;
  }

  if (props.boxed) {
    boxStyles.borderRadius = rs(Theme.size.radius.medium);
    boxStyles.padding = rs(Theme.size.radius.medium);
  }

  const Component = props.useSafeArea ? SafeAreaView : View;

  return (
    <>
      <Component {...props.copilot} {...props} style={[styles.box, boxStyles, props.style]}>
        {props.children}
      </Component>
    </>
  );
};

export { Box };
