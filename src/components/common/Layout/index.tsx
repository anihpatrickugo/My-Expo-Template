import * as React from "react";
import {
  ScrollView,
  StyleSheet,
  RefreshControl,
  View,
  SafeAreaView,
  ViewStyle,
  ViewProps,
  ScrollViewProps,
  ColorValue,
  StyleProp,
  Text,
} from "react-native";
import AppBar from "@/components/AppBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useTheme } from "@/hooks/useTheme";
import { widthPercentageToDP as wd } from "react-native-responsive-screen";
// import { LoadingScreen } from "../LoadingScreen";

interface LayoutProps extends ScrollViewProps, ViewProps {
  children: any;
  /**
   * Indicates if the screen is refreshing.
   * @default false
   */
  isRefreshing?: boolean;
  /**
   * Indicates if the screen should refresh.
   * @default false
   */
  shouldRefresh?: boolean;
  /**
   * Callback when the refresh control is dragged down.
   * @default () => {}
   * @returns void
   */
  onRefresh?: () => void;
  /**
   * Indicates if the layout is a ScrollView or not.
   * @default false
   */
  isScrollable?: boolean;
  /**
   * Indicates if the layout is a KeyboardAware ScrollView or ScrollView.
   * @default false
   */
  keyboardAware?: boolean;
  /**
   * Array of indexes of direct children of the layout that floats
   * during scrolling.
   * @default []
   */
  floatItemsIndex?: number[];
  /**
   * Custom style to the Layout component.
   * @default undefined
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Background color of the layout
   */
  bgColor?: ColorValue;
  statusColor?: ColorValue;
  statusHidden?: boolean;
  translucent?: boolean;
  isLoading?: boolean;
  safeArea?: boolean;
  fullWidth?: boolean;
  barStyle?: "light" | "dark" | "auto" | "inverted";
  onLayout?: (e: any) => void;
}

const Layout = React.forwardRef<ScrollView, LayoutProps>(
  (
    {
      isRefreshing = false,
      shouldRefresh = false,
      onRefresh = () => {},
      isScrollable = false,
      keyboardAware = false,
      floatItemsIndex = [],
      style,
      children,
      bgColor,
      statusColor,
      statusHidden = false,
      translucent = false,
      barStyle = "inverted",
      safeArea = true,
      fullWidth = false,
      onLayout,
      ...props
    },
    ref
  ) => {
    const { colors } = useTheme();

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingHorizontal: fullWidth ? 0 : wd(4),
        backgroundColor: bgColor || colors.white,
      },
    });

    const ScrollViewComponent = keyboardAware ? KeyboardAwareScrollView : ScrollView;

    const renderLayout = () =>
      isScrollable ? (
        <>
          <ScrollViewComponent
            ref={ref}
            keyboardShouldPersistTaps="handled"
            refreshControl={
              shouldRefresh ? (
                <RefreshControl
                  colors={[colors.tint]}
                  onRefresh={onRefresh}
                  refreshing={isRefreshing}
                  progressBackgroundColor="#fff"
                />
              ) : undefined
            }
            stickyHeaderIndices={floatItemsIndex}
            showsVerticalScrollIndicator={false}
            bounces
            style={[styles.container, style]}
          >
            {children}
          </ScrollViewComponent>
        </>
      ) : (
        <View style={[styles.container, style]}>{children}</View>
      );

    return (
      <>
        <AppBar
          backgroundColor={statusColor?.toString() || colors.white}
          hidden={statusHidden}
          translucent={translucent}
          style={barStyle}
        />
        {safeArea ? (
          <SafeAreaView onLayout={onLayout} style={{ flex: 1, backgroundColor: statusColor || colors.white }}>
            {renderLayout()}
          </SafeAreaView>
        ) : (
          <View style={{ flex: 1 }} onLayout={onLayout}>
            {renderLayout()}
          </View>
        )}

        {/* {props.isLoading && <LoadingScreen />} */}
        {props.isLoading && <Text>Loading</Text>}
      </>
    );
  }
);

Layout.displayName = "Layout";

export { Layout };
