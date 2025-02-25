import * as React from "react";
import { useTheme } from "@/hooks/useTheme";
import { ActivityIndicator, PressableProps, StyleProp, TextStyle, View, ViewStyle } from "react-native";
import { Clickable } from "../Clickable";
import { Text } from "../Text";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { rScale, rWidth } from "@/utils";

type ContentProps =
  | {
      /**
       * Custom content to add as direct child of the button
       */
      children: any;
      text?: never;
      bold?: never;
    }
  | {
      /**
       * Text to add to the button
       */
      text: string;
      /**
       * Make the button text bold
       */
      bold?: boolean;
      children?: never;
    };

interface DefaultProps extends PressableProps {
  onClick?: () => void;
  /**
   * Button Height
   * @default 'full'
   */
  size?: "full" | "small" | "medium";
  /**
   * Indicates buton with smaller height
   */
  smallHeight?: boolean;
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: "primary" | "secondary";
  /**
   * Icon to add on the right of the button
   */
  rightIcon?: React.ReactNode;
  /**
   * Icon to add on the left of the button
   */
  leftIcon?: React.ReactNode;
  /**
   * Is button disabled?
   */
  disabled?: boolean;
  /**
   * Indicates if button is loading.
   */
  isLoading?: boolean;
  /**
   * Determines outline button type
   */
  outline?: boolean;
  /**
   * Indicates if button radius is rounded
   */
  rounded?: boolean;
  /**
   * Array of gradiend colors
   */
  colors?: [string, string, ...string[]];
  /**
   * Custom stylel to add to button
   */
  style?: StyleProp<ViewStyle>;
  copilot?: any;
}

type ButtonProps = DefaultProps & ContentProps;

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  onClick = () => {},
  size = "full",
  smallHeight = false,
  variant = "primary",
  outline = false,
  bold = false,
  rightIcon,
  leftIcon,
  disabled = false,
  isLoading = false,
  rounded = false,
  colors: customColors,
  style,
  ...props
}) => {
  const { colors } = useTheme();

  const textStyle: TextStyle = {};

  const blockStyle: ViewStyle = {
    width: size === "small" ? rWidth(43.5) : size === "medium" ? rWidth(50.7) : "100%",
    height: smallHeight ? rScale(40) : rScale(48),
  };
  let gradient: [string, string, ...string[]] = ["transparent", "transparent"];

  switch (variant) {
    case "primary":
      blockStyle.backgroundColor = colors.black;
      textStyle.color = colors.white;
      break;

    case "secondary":
      blockStyle.backgroundColor = colors.white;
      textStyle.color = colors.black;
      break;
  }

  if (outline) {
    blockStyle.backgroundColor = "transparent";
    blockStyle.borderWidth = 1.4;
    blockStyle.borderColor = colors.tint;
    gradient = ["transparent", "transparent"];

    switch (variant) {
      case "primary":
        textStyle.color = colors.tabIconDefault;
        break;
      case "secondary":
        textStyle.color = colors.background;
        break;
    }
  }

  if (customColors) {
    gradient = customColors;
  }

  if (rounded) {
    blockStyle.borderRadius = 100;
  }

  if (disabled) {
    textStyle.color = colors.white;
    blockStyle.opacity = 0.4;
    // blockStyle.backgroundColor = colors.grey2;
    // gradient = [colors.grey2, colors.grey2];
    blockStyle.borderWidth = 0;
  }

  return (
    <Clickable {...props.copilot} disabled={disabled} onClick={isLoading || disabled ? undefined : onClick}>
      <LinearGradient colors={gradient} style={[styles.button, blockStyle, style]}>
        {isLoading ? (
          <ActivityIndicator size="large" color={textStyle.color || colors.white} />
        ) : (
          <>
            {leftIcon ? (
              <View
                style={{
                  ...styles.iconLeft,
                  borderColor: colors.white,
                }}
              >
                {leftIcon}
              </View>
            ) : null}

            {text ? (
              <Text variant="header-1" style={{ ...textStyle }}>
                {text}
              </Text>
            ) : null}

            {children ? children : null}

            {rightIcon ? (
              <View
                style={{
                  ...styles.iconRight,
                  borderColor: colors.white,
                }}
              >
                {rightIcon}
              </View>
            ) : null}
          </>
        )}
      </LinearGradient>
    </Clickable>
  );
};

export { Button };
