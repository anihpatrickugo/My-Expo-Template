import * as React from "react";
import { View, ViewStyle } from "react-native";
import { heightPercentageToDP as hd, widthPercentageToDP as wd } from "react-native-responsive-screen";

type DirectionProps =
  | {
      vertical?: never;
      /**
       * Indicates if the spacing should be horizontal
       */
      horizontal?: boolean;
    }
  | {
      /**
       * Indicates if the spacing is vertical
       */
      vertical?: boolean;
      horizontal?: never;
    };

interface DefaultProps {
  /**
   * Size of the spacer
   */
  size?: number;
}

type SpacerProps = DefaultProps & DirectionProps;

const Spacer: React.FC<SpacerProps> = ({ size, horizontal = false, vertical = false }) => {
  let style: ViewStyle = {
    margin: size || hd("1.1%"),
  };

  if (horizontal) {
    style = {
      marginHorizontal: size || wd("2.35%"),
    };
  }

  if (vertical) {
    style = {
      marginVertical: size || hd("1.1%"),
    };
  }

  return <View style={style} />;
};

export { Spacer };
