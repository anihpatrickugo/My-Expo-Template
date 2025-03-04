import * as React from "react";
import styles from "./styles";
import LottieView from "lottie-react-native";
import { rs } from "react-native-full-responsive";
import Animated, { LinearTransition, SlideInDown } from "react-native-reanimated";
import { useTheme } from "@/contexts/ThemeContext";
import * as UI from "@/components/common";
import { Audio } from "expo-av";

interface SplashScreenProps {}

const AppSplashScreen: React.FC<SplashScreenProps> = () => {
  const { colors } = useTheme();
  const helmetRef = React.useRef<LottieView>(null);
  const [showText, setShowText] = React.useState(true);

  React.useEffect(() => {
    loadAudio();
  }, []);

  const loadAudio = async () => {
    await Audio.Sound.createAsync(require("@/assets/audio/bike-starting.mp3"), {
      shouldPlay: true,
      volume: 0.2,
    });
  };

  return (
    <>
      <UI.Box style={styles.container} bgColor={"black"}>
        <UI.Box row flex vAlign="middle" hAlign="center">
          <Animated.View layout={LinearTransition.duration(500)}>
            <LottieView
              autoPlay
              loop={false}
              ref={helmetRef}
              speed={2}
              onAnimationFinish={() => {
                setShowText(true);
              }}
              style={{
                width: rs(56),
                height: rs(65),
              }}
              source={require("@/assets/gifs/helmet-gif.json")}
            />
          </Animated.View>
          {showText && (
            <>
              <UI.Spacer size={5} />
              <UI.Box style={{ overflow: "hidden" }} width="auto">
                <Animated.View entering={SlideInDown.duration(500)}>
                  <UI.Text color={colors.white} variant="max-header" size={rs(38)} align="center">
                    My Template
                  </UI.Text>
                  <UI.Text color={colors.white} variant="header-1" align="center">
                    Welcome
                  </UI.Text>
                </Animated.View>
              </UI.Box>
            </>
          )}
        </UI.Box>
      </UI.Box>
    </>
  );
};

export default AppSplashScreen;
