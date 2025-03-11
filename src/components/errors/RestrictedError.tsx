import { useTheme } from "@/hooks/useTheme";
import * as React from "react";
import * as UI from "@/components/common";

interface RestrictedErrorProps {}

const RestrictedError: React.FC<RestrictedErrorProps> = () => {
  const { colors } = useTheme();

  return (
    <>
      <UI.Text align="center" color={colors.white}>
        You are not able to access your account at the moment. Please{" "}
        <UI.Text bold color={colors.white} onPress={() => {}}>
          contact support.{" "}
        </UI.Text>
        for more information.
      </UI.Text>
    </>
  );
};

export { RestrictedError };
