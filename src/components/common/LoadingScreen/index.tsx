import * as React from "react";
import { useTheme } from "@/hooks/useTheme";
import styles from "./styles";
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { rs } from "react-native-full-responsive";

interface LoadingScreenProps {}

const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  const { color: colors } = useTheme();
  const helmetRef = React.useRef<LottieView>(null);
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(10, { duration: 1000, easing: Easing.linear }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sv.value }],
  }));

  return (
    <Animated.View
      style={[styles.container, { backgroundColor: colors.main() }]}
      entering={FadeIn}
      exiting={FadeOut.duration(1000)}
    >
      <Animated.View style={animatedStyle}>
        <LottieView
          ref={helmetRef}
          autoPlay
          onAnimationFinish={() => {
            helmetRef.current?.play(1, 0);
          }}
          loop={true}
          speed={0.8}
          style={{
            width: rs(56),
            height: rs(65),
          }}
          source={require("@/assets/gifs/helmet-gif.json")}
        />
      </Animated.View>
    </Animated.View>
  );
};

export { LoadingScreen };