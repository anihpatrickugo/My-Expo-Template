import { Redirect, Stack } from "expo-router";
import { useSession } from "@/contexts/AuthContext";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppSplashScreen from "@/screen/SplashScreen";

export default function AppLayout() {
  const { session, isLoading } = useSession();
  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <AppSplashScreen />;
  }

  // Only require authentication within the (dashboard) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    return <Redirect href="/login" />;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      {/* <AppSplashScreen /> */}
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
