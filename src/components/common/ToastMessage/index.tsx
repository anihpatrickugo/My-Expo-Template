import * as React from "react";
import { useTheme } from "@/hooks/useTheme";
import styles from "./styles";
import { Box } from "../Box";
import { Clickable } from "../Clickable";
import { Spacer } from "../Spacer";
import { Text } from "../Text";
import { SafeAreaView } from "react-native-safe-area-context";

interface ToastMessageProps {
  showError?: boolean;
  showSuccess?: boolean;
  message: string | React.ReactNode;
  onClose?: () => void;
}

const ToastMessage: React.FC<ToastMessageProps> = (props) => {
  const { color: colors } = useTheme();

  return (
    <Box style={styles.background}>
      <SafeAreaView>
        <Box
          style={styles.container}
          bgColor={props.showError ? colors.danger() : props.showSuccess ? colors.green() : colors.grey3()}
        >
          <Box style={styles.closeBtnBox}>
            <Clickable onClick={props.onClose}>
              <Box style={styles.closeBtn}>{/* <UI.Icon name="close" color={colors.white()} /> */}</Box>
            </Clickable>
          </Box>

          <Box row hAlign="center">
            {(props.showError || props.showSuccess) && (
              <Box vAlign="middle" hAlign="center" style={styles.dangerBox}>
                {/* <UI.Icon name={props.showError ? "alert" : "checkmark"} color={colors.white()} /> */}
              </Box>
            )}
          </Box>

          <Spacer size={5} />

          <Box>
            {typeof props.message === "string" ? (
              <Text align="center" color={colors.white()}>
                {props.message}
              </Text>
            ) : (
              props.message
            )}
          </Box>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export { ToastMessage };
