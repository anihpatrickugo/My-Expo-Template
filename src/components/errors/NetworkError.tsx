import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import * as UI from "@/components/common";

interface NetworkErrorProps {}

const NetworkError: React.FC<NetworkErrorProps> = () => {
  const { colors } = useTheme();

  return (
    <>
      <UI.Text align="center" color={colors.white}>
        Something went wrong, Please try again! {"\n"}
        If issue persists,{" "}
        <UI.Text bold color={colors.white} onPress={() => {}}>
          Contact Support.
        </UI.Text>
      </UI.Text>
    </>
  );
};

export { NetworkError };
