import React from "react";
import { useTheme } from "@/hooks/useTheme";
import {
  TextInput as TI,
  View,
  StyleSheet,
  Platform,
  LayoutAnimation,
  UIManager,
  TextInputProps as TIProps,
  ViewStyle,
  StyleProp,
  ColorValue,
} from "react-native";
import { heightPercentageToDP as hd, widthPercentageToDP as wd } from "react-native-responsive-screen";
import { Text } from "../Text";
import { Clickable } from "../Clickable";
import { rs } from "react-native-full-responsive";
import { Spacer } from "../Spacer";
import { Box } from "../Box";
import { Icon } from "../Icon";

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

export interface TextInputProps extends Omit<TIProps, "multiline" | "secureTextEntry" | "numberOfLines"> {
  ref?: React.RefObject<TI> | undefined;
  password?: boolean;
  rows?: number;
  iconRight?: React.ReactElement;
  iconLeft?: React.ReactElement;
  error?: boolean;
  errorMessage?: string;
  bgColor?: ColorValue;
  rounded?: boolean;
  disabled?: boolean;
  outline?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  floatLabel?: boolean;
  label?: string;
  floatLabelValue?: boolean;
  textarea?: boolean;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

const TextInput = React.forwardRef<TI, TextInputProps>(
  (
    {
      password = false,
      rounded = false,
      disabled = false,
      outline = false,
      editable = true,
      returnKeyType = "done",
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();
    const [active, setActive] = React.useState(false);

    const styles = StyleSheet.create({
      container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
      },
      input: {
        flex: 1,
        borderWidth: 1.4,
        paddingHorizontal: 20,
        fontSize: rs(12),
        height: props.textarea ? hd("11%") : rs(48),
        fontFamily: "Montserrat-SemiBold",
        paddingLeft: props.iconLeft ? 50 : undefined,
        paddingRight: props.iconRight ? 50 : undefined,
        borderRadius: rounded ? 50 : rs(4),
        backgroundColor: props.bgColor ?? (disabled ? colors.background : colors.white),
        color: !editable ? colors.text : props.error ? colors.tabIconSelected : colors.icon,
        borderColor: active ? colors.tint : props.error ? colors.black : outline ? colors.tint : colors.black,
      },
      iconLeft: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: 0,
        height: "100%",
        paddingHorizontal: wd("3%"),
        zIndex: 9999,
      },
      iconRight: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 5,
        top: 0,
        height: "100%",
        paddingHorizontal: wd("3%"),
        zIndex: 9999,
      },
      floatLabel: {
        paddingHorizontal: 5,
        marginLeft: 10,
        top: -10,
        zIndex: 9,
        width: "auto",
        position: "absolute",
      },
    });

    const handleFocus = (e: any) => {
      LayoutAnimation.easeInEaseOut();
      setActive(true);
      props.onFocus && props.onFocus(e);
    };

    const handleBlur = (e: any) => {
      LayoutAnimation.easeInEaseOut();
      setActive(false);
      props.onBlur && props.onBlur(e);
    };

    return (
      <View style={props.containerStyle}>
        {props.label && (
          <Box>
            <Text variant="p2" color={colors.tint}>
              {props.label}
            </Text>
            <Spacer size={3} />
          </Box>
        )}

        <View style={[styles.container]}>
          {props.iconLeft ? (
            <Clickable onClick={props.onLeftClick} style={styles.iconLeft}>
              {props.iconLeft}
            </Clickable>
          ) : null}

          <TI
            {...props}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            secureTextEntry={password}
            editable={!disabled}
            multiline={props.textarea}
            numberOfLines={props.rows}
            textBreakStrategy="highQuality"
            returnKeyType={returnKeyType}
            allowFontScaling={false}
            placeholderTextColor={active ? "transparent" : colors.black}
            style={[styles.input, props.style]}
          />

          {props.iconRight ? (
            <Clickable onClick={props.onRightClick} style={styles.iconRight}>
              {props.iconRight}
            </Clickable>
          ) : null}
        </View>

        {props.error && !!props.errorMessage && (
          <>
            <Spacer size={3} />
            <Box row vAlign="middle">
              <Icon name="info-circle" width={20} height={20} color={colors.tint} />
              <Spacer size={3} />
              <Text variant="p2" color={colors.black}>
                {props.errorMessage}
              </Text>
            </Box>
          </>
        )}

        {(props.floatLabel && active) || (props.floatLabelValue && (props.value || active)) ? (
          <Box bgColor={colors.white} style={styles.floatLabel}>
            <Text variant="p2" color={!editable ? colors.black : colors.tint}>
              {props.placeholder}
            </Text>
          </Box>
        ) : null}
      </View>
    );
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
