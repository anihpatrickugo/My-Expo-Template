import { styles } from "./styles";
import * as UI from "@/components/common";
import { useTheme } from "@/src/hooks/useTheme";
import { rHeight } from "@/src/utils";

export default function ExploreScreen() {
  const { color } = useTheme();
  return (
    <>
      <UI.Layout style={styles.container}>
        <UI.Text>Explore Screen</UI.Text>
        <UI.TextInput containerStyle={{ width: 300 }} />
        <UI.Spacer size={rHeight(2)} />
        <UI.Box boxed padded>
          <UI.Button text="submit" />
        </UI.Box>
      </UI.Layout>
    </>
  );
}
