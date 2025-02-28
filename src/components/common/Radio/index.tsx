import * as React from "react";
import { LayoutAnimation } from "react-native";
import { useTheme } from "@/hooks/useTheme";
import { Clickable } from "../Clickable";
import { Text } from "../Text";
import styles from "./styles";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { rs } from "react-native-full-responsive";

interface RadioProps {
  selected: boolean;
  checkStyle?: "check" | "rounded";
  leftLabel?: string;
  rightLabel?: string;
  onSelect?: () => void;
}

const Radio: React.FC<RadioProps> = ({ checkStyle = "rounded", ...props }) => {
  const { colors } = useTheme();

  const toggle = () => {
    LayoutAnimation.easeInEaseOut();
    props.onSelect?.();
  };

  return (
    <Clickable onClick={toggle} hasHaptic>
      <Box row vAlign="middle" style={styles.container}>
        {props.leftLabel && <Text style={{ marginRight: 10, width: "90%" }}>{props.leftLabel}</Text>}

        <Box
          style={{ ...styles.box, borderColor: props.selected ? colors.primary : colors.grey2 }}
          bgColor="transparent"
        >
          {props.selected && (
            <>
              {checkStyle === "rounded" && (
                <Animated.View
                  style={[styles.innerBox, { backgroundColor: colors.primary }]}
                  entering={ZoomIn}
                  exiting={ZoomOut}
                />
              )}
              {checkStyle === "check" && (
                <Icon name="checkmark-circle" color={colors.primary} width={rs(20)} height={rs(20)} />
              )}
            </>
          )}
        </Box>

        {props.rightLabel && (
          <Text variant="p3" style={{ marginLeft: 10, width: "90%" }}>
            {props.rightLabel}
          </Text>
        )}
      </Box>
    </Clickable>
  );
};

export { Radio };