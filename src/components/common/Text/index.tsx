import * as React from "react";
import { Text as TXT, StyleSheet, TextStyle, TextProps as TXTProps, ColorValue, StyleProp } from "react-native";
import { rs } from "react-native-full-responsive";
import { heightPercentageToDP as hd } from "react-native-responsive-screen";
import { useTheme } from "@/hooks/useTheme";

interface TextProps extends TXTProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  bold?: boolean;
  size?: number;
  color?: ColorValue;
  underline?: boolean;
  align?: "center" | "left" | "right";
  style?: StyleProp<TextStyle>;
  variant?: "max-header" | "header-2" | "header-1" | "p1" | "p2" | "p3" | "p-bold";
}

const Text: React.FC<TextProps> = ({
  /**
   * Largest font size
   */
  h1,
  /**
   * Second Largest font size
   */
  h2,
  /**
   * Third Largest font size
   */
  h3,
  /**
   * Makes the text bold
   */
  bold,
  /**
   * Add custom size of text
   */
  size,
  /**
   * Text content
   */
  children,
  /**
   * Custom style added to text
   */
  style,
  /**
   * Custom color added to text
   */
  color,
  /**
   * Align text horizontally
   */
  align,
  ...props
}) => {
  const { color: colors } = useTheme();

  const styles = StyleSheet.create({
    text: {
      color: color || colors.grey3(),
      fontFamily: "Montserrat-SemiBold",
    },
  });

  const textStyle: TextStyle = {
    fontSize: rs(12),
    lineHeight: rs(12) * 1.1,
  };

  if (h1) {
    textStyle.fontSize = rs(24);
    textStyle.lineHeight = rs(24) * 1.2;
    textStyle.fontFamily = "ClashDisplay-SemiBold";
    textStyle.color = color || colors.main();
  } else if (h2) {
    textStyle.fontFamily = "ClashDisplay-SemiBold";
    textStyle.fontSize = rs(16);
    textStyle.lineHeight = hd("3.5%");
    textStyle.color = color || colors.main();
  } else if (h3) {
    textStyle.fontFamily = "ClashDisplay-SemiBold";
    textStyle.fontSize = rs(14);
    textStyle.lineHeight = rs(14) * 1.1;
    textStyle.color = color || colors.main();
  }

  switch (props.variant) {
    case "max-header":
      textStyle.fontFamily = "ClashDisplay-SemiBold";
      textStyle.fontSize = rs(24);
      break;
    case "header-1":
      textStyle.fontFamily = "ClashDisplay-SemiBold";
      textStyle.fontSize = rs(16);
      break;
    case "header-2":
      textStyle.fontFamily = "ClashDisplay-SemiBold";
      textStyle.fontSize = rs(14);
      break;
    case "p-bold":
      textStyle.fontFamily = "Montserrat-Bold";
      break;
    case "p1":
      textStyle.fontFamily = "Montserrat-SemiBold";
      textStyle.fontSize = rs(10);
      break;
    case "p2":
      textStyle.fontFamily = "Montserrat-SemiBold";
      textStyle.fontSize = rs(12);
      textStyle.fontWeight = 600;
      break;
    case "p3":
      textStyle.fontFamily = "Montserrat-SemiBold";
      textStyle.fontSize = rs(14);
      textStyle.fontWeight = 600;
      break;
    default:
      break;
  }

  if (size) {
    textStyle.fontSize = size;
  }

  if (bold) {
    textStyle.fontFamily = "Montserrat-Bold";
  }

  if (align) {
    textStyle.textAlign = align;
  }

  if (props.underline) {
    textStyle.textDecorationLine = "underline";
    textStyle.textDecorationStyle = "solid";
    textStyle.textDecorationColor = color ?? colors.grey3();
  }

  textStyle.lineHeight = textStyle.fontSize ? textStyle.fontSize * 1.2 : textStyle.lineHeight;

  return (
    <TXT
      {...props}
      allowFontScaling={false}
      numberOfLines={props.numberOfLines || 1}
      selectable
      style={[styles.text, textStyle, style]}
    >
      {children}
    </TXT>
  );
};

export { Text };
