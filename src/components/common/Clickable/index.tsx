import * as React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import * as Haptics from "expo-haptics";

interface ClickableProps extends TouchableOpacityProps {
  children?: any;
  onClick?: () => void;
  hasHaptic?: boolean;
  copilot?: any;
}
const Clickable: React.FC<ClickableProps> = React.forwardRef<typeof TouchableOpacity, ClickableProps>(
  ({ copilot, ...props }, ref) => {
    const { onClick, children } = props;

    const handleClick = () => {
      if (props.hasHaptic) {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      }
      onClick?.();
    };

    return (
      <TouchableOpacity ref={ref} onPress={handleClick} activeOpacity={0.7} {...props} {...copilot}>
        {children}
      </TouchableOpacity>
    );
  }
);

Clickable.displayName = "Clickable";

export { Clickable };
