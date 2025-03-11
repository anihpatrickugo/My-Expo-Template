import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import * as UI from "@/components/common";

interface ServerErrorProps {}

const ServerError: React.FC<ServerErrorProps> = () => {
  const { colors } = useTheme();

  return (
    <>
      <UI.Text align="center" color={colors.white}>
        Something went wrong! {"\n"}
      </UI.Text>
      <UI.Text align="center" color={colors.white}>
        It's not you, it's us. Please try again later, {"\n"} Or{" "}
        <UI.Text bold color={colors.white} onPress={() => {}}>
          Contact Support.
        </UI.Text>
      </UI.Text>
    </>
  );
};

export { ServerError };
