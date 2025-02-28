import * as React from "react";
import LottieView from "lottie-react-native";
import { rh, rw } from "react-native-full-responsive";
import { Audio } from "expo-av";
import Animated, { ZoomIn, ZoomOut } from "react-native-reanimated";
import styles from "./styles";
import { useTheme } from "@/hooks/useTheme";
import { Box } from "../Box";
import { Spacer } from "../Spacer";
import { Text } from "../Text";
import { Button } from "../Button";

interface SuccessModalProps {
  title: string;
  description?: string;
  buttonText?: string;
  onClick?: () => void;
  secondaryButton?: React.ReactNode;
}

const SuccessModal: React.FC<SuccessModalProps> = (props) => {
  const { color: colors } = useTheme();

  React.useEffect(() => {
    loadAudio();
  }, []);

  const loadAudio = async () => {
    await Audio.Sound.createAsync(require("@/assets/audio/success.wav"), {
      shouldPlay: true,
    });
  };

  return (
    <>
      <Animated.View
        style={[styles.container, { backgroundColor: colors.white() }]}
        entering={ZoomIn}
        exiting={ZoomOut}
      >
        <LottieView
          autoPlay
          loop={false}
          style={{
            width: rw(100),
            height: rh(100),
            position: "absolute",
            top: 0,
          }}
          source={require("@/assets/gifs/celebration-gif.json")}
        />

        <Box flex={7} vAlign="middle" padded>
          <Box hAlign="center">
            <LottieView
              autoPlay
              loop={false}
              style={{
                width: 200,
                height: 200,
              }}
              source={require("@/assets/gifs/success-gif.json")}
            />
          </Box>

          <Spacer />

          <Text variant="max-header" color={colors.green()} align="center">
            {props.title}
          </Text>

          <Spacer />

          <Text align="center">{props.description}</Text>
        </Box>

        <Box padded vAlign="bottom">
          {props.buttonText && <Button text={props.buttonText} onClick={props.onClick} />}
          {props.secondaryButton}

          <Spacer size={rh(3)} />
        </Box>
      </Animated.View>
    </>
  );
};

export { SuccessModal };