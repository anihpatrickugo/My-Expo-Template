import * as React from "react";
import { useTheme } from "@/hooks/useTheme";
import { View, SafeAreaView, StatusBar as RNStatusBar, Platform } from "react-native";
import { StatusBar, StatusBarProps } from "expo-status-bar";

const STATUSBAR_HEIGHT = RNStatusBar.currentHeight;

interface AppBarProps extends StatusBarProps {}

const isIOS = Platform.OS === "ios";

const AppBar: React.FC<AppBarProps> = (props) => {
  const { colors } = useTheme();
  const { hidden, translucent, backgroundColor } = props;

  return isIOS ? (
    !hidden ? (
      <View
        style={{
          height: translucent ? 0 : STATUSBAR_HEIGHT,
          backgroundColor: backgroundColor || colors.white,
        }}
      >
        <SafeAreaView>
          <StatusBar translucent={translucent} {...props} />
        </SafeAreaView>
      </View>
    ) : (
      <StatusBar {...props} />
    )
  ) : (
    <StatusBar {...props} />
  );
};

export default AppBar;
