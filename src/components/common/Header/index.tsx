import * as React from "react";
import styles from "./styles";
import { useTheme } from "@/hooks/useTheme";
import { router } from "expo-router";
import { Clickable } from "../Clickable";
import { Text } from "../Text";
import { ColorValue } from "react-native";
import { Box } from "../Box";
import { Icon } from "../Icon";

interface HeaderProps {
  title: string;
  bgColor?: ColorValue;
  RightComponent?: React.ReactNode;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { colors } = useTheme();

  return (
    <Box padded style={styles.header} bgColor={props.bgColor || colors.main}>
      <Box row vAlign="middle" justify="space-between">
        <Clickable onClick={props.onBack ?? router.back}>
          <Box row vAlign="middle" width="auto">
            <Icon name="chevron-left" />
          </Box>
        </Clickable>

        <Text variant="max-header" color={colors.white}>
          {props.title}
        </Text>

        <Box width="auto">{props.RightComponent && props.RightComponent}</Box>
      </Box>
    </Box>
  );
};

export { Header };