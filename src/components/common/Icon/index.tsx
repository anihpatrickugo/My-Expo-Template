import * as React from "react";
import { SvgProps } from "react-native-svg";
import { icons } from "./icons";
import { ColorValue } from "react-native";
import { Box } from "../Box";
import { rs } from "react-native-full-responsive";
import { useTheme } from "@/hooks/useTheme";

type IconType = keyof typeof icons;

interface IconProps extends SvgProps {
  name: IconType;
  size?: number;
  color2?: ColorValue;
  color3?: ColorValue;
  color4?: ColorValue;
}

const SIZE = rs(24);

const Icon: React.FC<IconProps> = (props) => {
  const { color: colors } = useTheme();
  const Element = icons[props.name];

  if (!Element) {
    console.warn(`Icon ${props.name} not found`);
    return null;
  }

  return (
    <>
      <React.Suspense fallback={<Box width={rs(18)} height={rs(18)} bgColor={colors.grey2(0.5)} />}>
        <Element {...props} width={props.size || props.width || SIZE} height={props.size || props.height || SIZE} />
      </React.Suspense>
    </>
  );
};

export { Icon };
