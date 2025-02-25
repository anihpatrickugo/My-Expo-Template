import * as React from "react";
import { useColorScheme } from "react-native";
import { Colors } from "@/constants";
import { Theme } from "@/theme";

export const ThemeContext = React.createContext<{
  isDark: boolean;
  colors: typeof Colors.light;
  color: typeof Theme.colors.light;
  setScheme: (scheme: "light" | "dark") => void;
}>({
  isDark: false,
  colors: Colors.light,
  color: Theme.colors.light,
  setScheme: () => {},
});

export const ThemeProvider: React.FC<{ children: any }> = ({ children }) => {
  // Getting the device color theme, this will also work with react-native-web
  const colorScheme = useColorScheme();

  /*
   * To enable changing the app theme dynamicly in the app (run-time)
   * we're gonna use useState so we can override the default device theme
   */
  const [isDark, setIsDark] = React.useState(colorScheme === "dark");

  const defaultTheme = {
    isDark,
    // Chaning color schemes according to theme
    colors: isDark ? Colors.dark : Colors.light,
    color: isDark ? Theme.colors.dark : Theme.colors.light,
    // Overrides the isDark value will cause re-render inside the context.
    setScheme: (scheme: typeof colorScheme) => {
      setIsDark(scheme === "dark");
    },
  };

  return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => React.useContext(ThemeContext);
