import * as React from "react";
import { LayoutAnimation, Platform, StyleProp, UIManager, ViewStyle } from "react-native";
import { useTheme } from "@/contexts/ThemeContext";
import { Clickable } from "../Clickable";
import { Text } from "../Text";
import styles from "./styles";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { rScale } from "@/utils";

interface CheckboxProps {
  /**
   * Indicates if checkbox is checked.
   */
  checked: boolean;
  /**
   * Text Label to show on the left of the checkbox
   */
  leftLabel?: string;
  /**
   * Text label to show on the right of the checkbox
   */
  rightLabel?: string;
  /**
   * Called with the current value of the checkbox when tapped.
   * @param value the current value of the checkbox.
   * @returns void
   */
  onChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
}

if (Platform.OS === "android") {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { colors } = useTheme();
  const [checked, setChecked] = React.useState(false);

  React.useEffect(() => {
    setChecked(props.checked);
  }, [props.checked]);

  const toggleChecked = () => {
    LayoutAnimation.easeInEaseOut();
    setChecked((prev) => {
      props.onChange && props.onChange(!prev);
      return !prev;
    });
  };

  return (
    <Clickable onClick={toggleChecked} hasHaptic>
      <Box row vAlign="middle" style={props.style}>
        {props.leftLabel && <Text style={{ marginRight: 10 }}>{props.leftLabel}</Text>}

        <Box
          vAlign="middle"
          hAlign="center"
          style={{ ...styles.container, borderColor: colors.main }}
          bgColor={checked ? colors.main : "transparent"}
        >
          <Icon name="checkmark" size={rScale(14)} />
        </Box>

        {props.rightLabel && (
          <Text variant="p3" style={{ marginLeft: 10 }}>
            {props.rightLabel}
          </Text>
        )}
      </Box>
    </Clickable>
  );
};

export { Checkbox };