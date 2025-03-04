import * as React from "react";
import Animated, { withSpring } from "react-native-reanimated";
import { useTheme } from "@/hooks/useTheme";
import { Clickable } from "../Clickable";
import styles from "./styles";
import { Box } from "../Box";
import { ActivityIndicator } from "react-native";

interface SwitchProps {
  value?: boolean;
  onChange?: (value: boolean) => void;
  isLoading?: boolean;
}

const Switch: React.FC<SwitchProps> = (props) => {
  const [value, setValue] = React.useState(false);
  const { color: colors } = useTheme();

  React.useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, [props.value]);

  const toggleChange = () => {
    props.onChange && props.onChange(!value);
    setValue((prev) => !prev);
  };

  return (
    <Clickable onClick={toggleChange} hasHaptic>
      <Box
        bgColor={colors.white()}
        borderColor={colors.grey2()}
        vAlign="middle"
        style={{
          ...styles.background,
          borderColor: colors.grey2(),
        }}
      >
        {props.isLoading ? (
          <Box
            style={[
              styles.thumb,
              {
                right: value ? 4 : undefined,
                left: value ? undefined : 4,
              },
            ]}
          >
            <ActivityIndicator color={value ? colors.primary() : colors.grey3()} />
          </Box>
        ) : (
          <Animated.View
            layout={transition}
            style={[
              styles.thumb,
              {
                backgroundColor: value ? colors.primary() : colors.grey2(),
                right: value ? 4 : undefined,
                left: value ? undefined : 4,
              },
            ]}
          />
        )}
      </Box>
    </Clickable>
  );
};

const transition = (values: any) => {
  "worklet";
  return {
    animations: {
      originX: withSpring(values.targetOriginX),
    },
    initialValues: {
      originX: values.currentOriginX,
    },
  };
};

export { Switch };
