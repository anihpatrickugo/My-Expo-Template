import * as React from "react";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import { useTheme } from "@/hooks/useTheme";
import { Clickable } from "../Clickable";
import styles from "./styles";
import { ViewStyle } from "react-native";
import { Box } from "../Box";

interface ModalProps {
  children?: any;
  show: boolean;
  backgroundStyle?: ViewStyle;
  onClose?: () => void;
  hideBackground?: boolean;
  containerStyle?: ViewStyle;
}

const Modal: React.FC<ModalProps> = (props) => {
  const { colors } = useTheme();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  const closeModal = () => {
    setShow(false);
    props.onClose && props.onClose();
  };

  if (!show) return null;

  return (
    <Box style={[styles.background, props.backgroundStyle]}>
      <Animated.View
        entering={ZoomIn}
        exiting={ZoomOut}
        style={[styles.container, { backgroundColor: colors.white }, props.containerStyle]}
      >
        {props.children}
      </Animated.View>
      {!props.hideBackground && <Clickable style={styles.dismisser} onClick={closeModal} />}
    </Box>
  );
};

export { Modal };