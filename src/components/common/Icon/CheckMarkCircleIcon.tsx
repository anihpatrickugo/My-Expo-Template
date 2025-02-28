import * as React from "react";
import Svg, { SvgProps, Path, G } from "react-native-svg";

const CheckmarkCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.color || "#fff"}
        d="M12 2.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10Zm-2 15-5-5 1.41-1.41L10 14.67l7.59-7.59L19 8.5l-9 9Z"
      />
    </G>
  </Svg>
);

export default CheckmarkCircleIcon;