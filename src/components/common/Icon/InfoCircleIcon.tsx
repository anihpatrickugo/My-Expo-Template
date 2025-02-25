import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const InfoCircleIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <Path
      stroke={props.color || "#FF5244"}
      strokeWidth={1.5}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={props.color || "#FF5244"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.992 15h.01"
    />
    <Path
      stroke={props.color || "#FF5244"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12V8"
    />
  </Svg>
);

export default InfoCircleIcon;
