import * as React from "react";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { rs } from "react-native-full-responsive";
import { Box } from "../Box";

interface LoadingComponentProps {}

const LoadingComponent: React.FC<LoadingComponentProps> = () => {
  const helmetRef = React.useRef<LottieView>(null);
  const sv = useSharedValue(0);

  React.useEffect(() => {
    sv.value = withRepeat(withTiming(10, { duration: 1000, easing: Easing.linear }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: sv.value }],
  }));

  return (
    <Box flex vAlign="middle" hAlign="center">
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
    </Box>
  );
};

export { LoadingComponent };